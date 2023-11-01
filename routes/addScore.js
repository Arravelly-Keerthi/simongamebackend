const express = require("express");
const Score = require("../models/Score");
const router = express.Router();

router.post('/:_id', async (req, res) => {
  const { score } = req.body;
  const { _id } = req.params;
  try {
    // Check if a score already exists for the given user ID
    const existingScore = await Score.findOne({ user_id: _id });
    if (existingScore) {
      // If a score exists, compare with the new score and update if necessary
      if (score > existingScore.score) {
        existingScore.score = score;
        await existingScore.save();
      }
    } else {
      // If a score doesn't exist, create a new score entry
      const newScore = new Score({ user_id: _id, score });
      await newScore.save();
    }

    console.log("The score is successfully added/updated!!!");
    res.sendStatus(200);
  } catch (err) {
    console.log("Error: ", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;


