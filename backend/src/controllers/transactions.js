const Expense = require('../models/ExpenseModel');
const User = require('../models/UserModel');
const mongoose = require('mongoose');
const colors = require('colors');

exports.addTransaction = async (req, res) => {
  console.log('Add transaction'.green);
  const { _id: user } = req.userData;
  console.log(user);
  const date = new Date();
  console.log(date.getTime());
  const {
    transaction_amt,
    transaction_cat,
    transaction_type,
    transaction_desc,
    dd,
    mm,
    yy,
  } = req.body;
  try {
    const transaction = new Expense({
      user,
      transaction_amt,
      transaction_cat,
      transaction_type,
      transaction_desc,
      dd,
      mm,
      yy,
    });
    await transaction.save();
    const updatedUser = await User.updateOne(
      { _id: req.userData._id },
      { $push: { transactions: transaction._id } }
    );
    console.log(updatedUser);
    Expense.aggregate();
    res.status(201).json({ msg: 'Hello', data: transaction });
  } catch (error) {
    console.log('ERROR', error);
    res.status(500).json({ success: false, msg: 'Server error' });
  }
};

exports.getAllTransactions = async (req, res) => {
  console.log('Get All Trans'.cyan);
  try {
    const transactions = await Expense.find();
    res
      .status(200)
      .json({ success: true, count: transactions.length, data: transactions });
  } catch (error) {
    console.log('Error get all trans'.red);
    res.status(500).json({ success: false, msg: error.message });
  }
};

exports.getTransactionsByUserId = async (req, res) => {
  console.log('Trans by id'.green);
  const { _id: user } = req.userData;
  try {
    const transactions = await Expense.find({ user }).sort({
      createdAt: 'desc',
    });

    res
      .status(200)
      .json({ success: true, count: transactions.length, data: transactions });
  } catch (error) {
    console.log('Error get all trans by id'.red);
    res.status(500).json({ success: false, msg: error.message });
  }
};

// find the total income of a user
// find the total expense of a user
// find available balance of a user

exports.test = async (req, res) => {
  console.log('Test route');
  try {
    const ObjectId = mongoose.Types.ObjectId;
    const id = '605ff1a0e4edad27d89580ad';

    const pipeline = [
      {
        $group: {
          _id: { type: '$transaction_type' },
          amount: { $sum: '$transaction_amt' },
          type: { $first: '$transaction_type' },
          transactionList: {
            $push: {
              transaction_cat: '$transaction_cat',
              amount: '$transaction_amt',
              id: '$_id',
            },
          },
        },
      },
      { $unwind: '$transactionList' },
      {
        $group: {
          _id: { type: '$type' },
          amount: { $first: '$amount' },
          type: { $first: '$type' },
          transactionList: { $push: '$transactionList' },
        },
      },
    ];
    Expense.aggregate(pipeline).exec((err, data) => {
      res.status(200).json({ msg: 'Testing', data });
    });
  } catch (error) {
    res.status(500).json({ msg: 'Testing error', error: error.message });
  }
};

exports.testing = (req, res) => {
  const { _id: userId } = req.userData;
  const group1 = {
    $group: {
      _id: { transaction_cat: '$transaction_cat' },
      amountSpent: { $sum: '$transaction_amt' },
      transaction_cat: { $first: '$transaction_cat' },
    },
  };

  Expense.aggregate([{ $match: { user: userId } }, { ...group1 }])
    .allowDiskUse(true)
    .exec((error, data) => {
      console.log('DATA ', data);
    });
  return res.status(200).json({ msg: userId });
};

exports.getUserTransactionsData = (req, res) => {
  const { _id: userId } = req.userData;

  // group documents based on transaction_type(income,expense) , accumlate transaction_amt for each transaction_type -> this will give total amount under income and expense type. Select the first transaction_type and add it to an array transactionArray
  const group1 = {
    $group: {
      _id: { transaction_type: '$transaction_type' },
      totalAmount: { $sum: '$transaction_amt' },
      transaction_type: { $first: '$transaction_type' },
      transactionArray: {
        $push: {
          user: '$user',
          transaction_amt: '$transaction_amt',
          transaction_cat: '$transaction_cat',
          transaction_date: '$transaction_date',
          transaction_desc: '$transaction_desc',
        },
      },
    },
  };
  // split the transactionArray into individual doc
  const unwind = {
    $unwind: '$transactionArray',
  };
  // sort desc order of transamt
  const sort = {
    $sort: { 'transactionArray.transaction_amt': -1 },
  };
  // regroup the doc
  const reGroup = {
    $group: {
      _id: { transaction_type: '$transaction_type' },
      totalAmount: { $first: '$totalAmount' },
      transaction_type: { $first: '$transaction_type' },
      transactionArray: { $push: '$transactionArray' },
    },
  };

  Expense.aggregate([
    { $match: { user: userId } },
    { ...group1 },
    { ...unwind },
    { ...sort },
    { ...reGroup },
    {
      $project: {
        _id: 0,
        totalAmount: 1,
        transaction_type: 1,
        transactionArray: 1,
      },
    },
  ])
    .allowDiskUse(true)
    .exec((error, data) => {
      if (error) {
        res.send(500).send(error);
      } else {
        let expenseList = {};
        let incomeList = {};
        Object.keys(data).map((key) => {
          console.log('KEY ', data[key]);
          if (data[key].transaction_type === 'expense') {
            expenseList = data[key];
          } else if (data[key].transaction_type === 'income') {
            incomeList = data[key];
          }
        });
        let spent;
        let avlBalance;
        if (expenseList && expenseList.transactionArray) {
          expenseList.transactionArray.map((transaction) => {
            let percent =
              transaction.transaction_amt / (expenseList.totalAmount / 100);
            transaction.percent = Math.round(percent * 100) / 100;
            console.log(
              `% spent on ${transaction.transaction_cat} is ${transaction.percent}`
            );
          });
          spent = expenseList.totalAmount;
        } else {
          spent = 0;
        }
        if (incomeList && incomeList.transactionArray) {
          incomeList.transactionArray.map((transaction) => {
            let percent =
              transaction.transaction_amt / (incomeList.totalAmount / 100);
            transaction.percent = Math.round(percent * 100) / 100;
            console.log(
              `% income on ${transaction.transaction_cat} is ${transaction.percent}`
            );
          });
          avlBalance = incomeList.totalAmount - spent;
        } else {
          avlBalance = 0 - spent;
        }
        res
          .status(200)
          .json({ success: true, expenseList, incomeList, spent, avlBalance });
      }
    });
};

//605bf1a4f3834a2e94ee0845
// {"_id":{"$oid":"605ff1a0e4edad27d89580ad"},"default_currency":"Rs","transactions":[{"$oid":"605ff3cd62b97e138c61006a"},{"$oid":"605ff4f962b97e138c61006b"},{"$oid":"605ff54562b97e138c61006c"},{"$oid":"605ff57c62b97e138c61006d"},{"$oid":"605ff5cc62b97e138c61006e"},{"$oid":"605ff60162b97e138c61006f"},{"$oid":"605ff63c62b97e138c610070"},{"$oid":"605ff67f62b97e138c610071"}],"username":"john","email":"john@gmail.com","password":"$2b$10$kC2mAv81q/6YvwPg1TVoxOW/jbghuh861JG7MG3LDBKYnqtwzMjXq","createdAt":{"$date":{"$numberLong":"1616900512270"}},"updatedAt":{"$date":{"$numberLong":"1616901759586"}},"__v":{"$numberInt":"0"}}
