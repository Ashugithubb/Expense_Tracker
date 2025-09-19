import express from 'express';
import verifyToken from '../middlewares/authMiddleware.js';
import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { addExpense, editExpense } from '../controllers/expenseController.js'

const router = express.Router();

router.post('/', verifyToken, (req, res, next) => {
  next();
}, addExpense);


router.put('/:id', verifyToken, (req, res, next) => {
  next()
}, editExpense);


export default router;
