const blogController = require("express").Router();

const authentication = require("../middleware/authentication");
const Blog = require("../model/blog");
const Comment = require("../model/comment");

blogController.get("/get", authentication, async (req, res) => {
  // http://localhost:3005/blog/get?page=0
  const page = req.query.page || 0;
  const blogPerPage = 5;
  try {
    const data = await Blog.find()
      .skip(page * blogPerPage)
      .limit(blogPerPage);
    res.status(200).json(data);
  } catch (error) {
    res.json({ message: "could't not get blog post " });
  }
});

blogController.get("/get/:id", authentication, async (req, res) => {
  try {
    const data = await Blog.findById({ _id: req.params.id });
    const allComments = await Comment.find({ blogId: data._id });
    res.status(200).json({ data, allComments });
  } catch (error) {
    res.json({ message: "could't not get one blog post " });
  }
});

blogController.post("/create", authentication, async (req, res) => {
  try {
    const data = await Blog.create({ text: req.body.text });
    res.status(201).json(data);
  } catch (error) {
    res.json({ message: "could't not create blog post " });
  }
});

blogController.put("/update/:id", authentication, async (req, res) => {
  try {
    const data = await Blog.findByIdAndUpdate(
      { _id: req.params.id },
      { text: req.body.text }
    );
    res.status(200).json(data);
  } catch (error) {
    res.json({ message: "could't not update blog post " });
  }
});

blogController.delete("/remove/:id", authentication, async (req, res) => {
  try {
    const data = await Blog.findByIdAndDelete({ _id: req.params.id });
    const allComments = await Comment.deleteMany({ blogId: req.params.id });

    res.status(200).json({ data, allComments });
  } catch (error) {
    res.json({ message: "could't not delete blog post " });
  }
});

module.exports = blogController;
