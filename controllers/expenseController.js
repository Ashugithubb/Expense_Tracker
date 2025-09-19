import User from '../models/user.js';
import Expense from '../models/expense.js'
const addExpense = async (req, res) => {

    const { title, description, category, amount, date } = req.body;


    const user = await User.findById(req.userId);

    try {
        const newExpense = new Expense({
            title,
            description,
            category,
            amount,
            date,
            user
        });
        const savedUserExpense = await newExpense.save();
        res.status(201).json(savedUserExpense);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to add expense' });
    }
}

const editExpense = async (req, res) => {
    const expenseId = req.params.id;
    
    console.log("expenseId",expenseId);

    const expense = Expense.findById({_id:expenseId});
    
    console.log(expense,"expense");

    return res.status("200").json({msg:"Expense Updated"});

}



export { addExpense,editExpense}