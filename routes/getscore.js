const express = require('express');
const Score = require('../models/Score');
const router = express.Router();

router.get('/:_id', async (req, res) => {
  const { _id } = req.params;
  try {
    const scores = await Score.find({ user_id: _id }).lean();
    res.json(scores);
  } catch (error) {
    console.error('Error retrieving scores:', error);
    res.status(500).json({ error: 'Failed to retrieve scores' });
  }
});

module.exports = router;
