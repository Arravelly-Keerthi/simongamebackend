const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Assuming you have a User model

// GET endpoint to retrieve all users
router.get("/:userId", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log('Error retrieving users:', error);
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
});

module.exports = router;
