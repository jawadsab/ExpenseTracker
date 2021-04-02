const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;
const ExpenseSchema = new mongoose.Schema(
  {
    user: {
      type: ObjectId,
      ref: 'User',
    },
    transaction_amt: {
      type: Number,
      required: true,
      trim: true,
    },
    transaction_cat: {
      type: String,
      required: true,
      trim: true,
      default: 'others',
    },
    transaction_type: {
      type: String,
      required: true,
      trim: true,
      default: 'expense',
    },
    transaction_desc: {
      type: String,
      required: false,
      trim: true,
    },
    transaction_date: {
      type: Date,
      required: false,
      trim: true,
      default: Date.now(),
    },
    dd: {
      type:Number,
      trim:true,
      required:false
    },
    mm: {
      type:Number,
      trim:true,
      required:false
    },
    yy: {
      type:Number,
      trim:true,
      required:false
    }
  },
  { timestamps: true }
);

const Expense = mongoose.model('Expense', ExpenseSchema);
module.exports = Expense;
