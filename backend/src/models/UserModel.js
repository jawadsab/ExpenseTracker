const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      trim: true,
    },
    default_currency: {
      type: String,
      trim: true,
      default: 'Rs',
    },
    transactions: [
      {
        type: ObjectId,
        ref: 'Expense',
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model('Users', UserSchema);
module.exports = User;
