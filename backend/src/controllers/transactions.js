const Expense = require("../models/ExpenseModel");
const colors = require("colors");

exports.addTransaction = async (req,res) => {
    console.log("Add transaction".green);
    const {_id:user} = req.userData; 
    console.log(user);
    const {transaction_amt,transaction_cat,transaction_type} = req.body;
    try {
        const transaction = new Expense({user,transaction_amt,transaction_cat,transaction_type});
        await transaction.save();
        res.status(201).json({msg:"Hello",data:transaction})
    } catch (error) {
        console.log("ERROR",red);
        res.status(500).json({success:false,msg:"Server error"});
    }
}

exports.getAllTransactions = async (req,res) => {
    console.log("Get All Trans".cyan);
    try {
        const transactions = await Expense.find();
        res.status(200).json({success:true,count:transactions.length,data:transactions});
    } catch (error) {
        console.log("Error get all trans".red);
        res.status(500).json({success:false,msg:error.message});
    }
}

exports.getTransactionsByUserId = async (req,res) => {
    console.log("Trans by id".green);
    const {_id:user} = req.userData; 
    try {
        const transactions = await Expense.find({user});
        res.status(200).json({success:true,count:transactions.length,data:transactions});
    } catch (error) {
        console.log("Error get all trans by id".red);
        res.status(500).json({success:false,msg:error.message});
    }
}


//605bf1a4f3834a2e94ee0845
