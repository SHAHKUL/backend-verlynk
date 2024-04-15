const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  blogId: {
    type: String,
    required: true,
  },
});

const Comment = mongoose.model("comments", Schema);
module.exports = Comment;
