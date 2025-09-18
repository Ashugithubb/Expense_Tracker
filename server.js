import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoute.js';
import connectDB from './config/db.js';

dotenv.config();

const app = express();
connectDB();

app.use(express.json());

app.use((req, res, next) => {
  console.log(`Incoming ${req.method} request to ${req.url}`);
  next();
});

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
