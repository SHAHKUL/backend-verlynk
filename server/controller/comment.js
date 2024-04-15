const commentController = require("express").Router();
const authentication = require("../middleware/authentication");
const Comment = require("../model/comment");

commentController.get("/get",authentication, async (req, res) => {
  try {
    const data = await Comment.find();
    res.status(200).json(data);
  } catch (error) {
    res.json({ message: "could't not get blog post " });
  }
});

commentController.get("/get/:id",authentication,  async (req, res) => {
  try {
    const data = await Comment.findById({ _id: req.params.id });
    res.status(200).json(data);
  } catch (error) {
    res.json({ message: "could't not get one blog post " });
  }
});

commentController.post("/create",authentication,  async (req, res) => {
  const { text, blogId } = req.body;
  try {
    const data = await Comment.create({ text, blogId });
    res.status(201).json(data);
  } catch (error) {
    res.json({ message: "could't not create blog post " });
  }
});

commentController.put("/update/:id",authentication,  async (req, res) => {
  try {
    const data = await Comment.findByIdAndUpdate(
      { _id: req.params.id },
      { text: req.body.text }
    );
    res.status(200).json(data);
  } catch (error) {
    res.json({ message: "could't not update blog post " });
  }
});

commentController.delete("/remove/:id",authentication,  async (req, res) => {
  try {
    const data = await Comment.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json(data);
  } catch (error) {
    res.json({ message: "could't not delete blog post " });
  }
});

module.exports = commentController;
