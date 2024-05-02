const User = require('../models/User');

// Controller functions
exports.createUser = async (req, res) => {
  try {
    const { id, name, email } = req.body;
    const newUser = new User({ id, name, email });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const updatedUser = await User.findOneAndUpdate({ id }, { name, email }, { new: true });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ id });
    if (!user) throw Error('User not found');
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.deleteUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedUser = await User.findOneAndDelete({ id });
      if (!deletedUser) throw Error('User not found');
      res.status(200).json({ message: 'User deleted successfully', user: deletedUser });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  };
  