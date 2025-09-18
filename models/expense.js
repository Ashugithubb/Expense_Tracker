import mongoose, { Schema } from 'mongoose';
import { ref } from 'process';

const expenseSchema = new mongoose.Schema(
  {
    expenseType: { enum: [ "Food", "Transportation", "Other" ], required: true },
    amount: { type: Number, required: true, unique: true },
    user:[{
        type:Schema.Types.ObjectId,
        ref:"Users"
    }]
  },
  { timestamps: true }
);

const Expense = mongoose.model('User', userSchema);

export default Expense;