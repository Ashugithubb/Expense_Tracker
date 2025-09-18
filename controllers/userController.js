import User from '../models/user.js';

const createUser = async (req, res) => {
      console.log('Incoming POST /api/users');
  const { name, email, password } = req.body;
console.log("name",name);
  try {
    const newUser = new User({
      name,
      email,
      password
    });

    const savedUser = await newUser.save();
    console.log('User created:', savedUser);

    res.status(201).json(savedUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
};

export default createUser;
