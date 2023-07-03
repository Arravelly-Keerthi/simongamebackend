const mongoose = require("mongoose");

const ScoreSchema = new mongoose.Schema({
  user_id:{
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Score", ScoreSchema);