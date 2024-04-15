const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});

const Blog = mongoose.model("blogs", Schema);
module.exports = Blog;
