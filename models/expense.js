import mongoose from 'mongoose';

const expenseSchema = new mongoose.Schema(
  {
    expenseType: { enum: [ "Food", "Transportation", "Other" ], required: true },
    amount: { type: Number, required: true, unique: true },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;