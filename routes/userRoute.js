import express from 'express';
import createUser from '../controllers/userController.js';

const router = express.Router();

router.get('/test', (req, res) => {
  console.log('GET /api/users/test route hit');
  res.send('Test route is working!');
});

router.post('/', (req, res, next) => {
  console.log('POST /api/users route hit');
  console.log('Request body:', req.body);
  next();
}, createUser);

export default router;
