require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ratelimit = require("express-rate-limit");
const app = express();
const authController = require("./controller/user");
const blogController = require("./controller/blog");
const commentController = require("./controller/comment");

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.URL);

const limiter = ratelimit({
  windowMs: 1 * 60 * 1000,
  max: 20,
  message: "Too many requests from this IP Address, Please try sometime later",
});

app.use(limiter);

app.use("/auth", authController);
app.use("/blog", blogController);
app.use("/comment", commentController);

app.get("/", (req, res) => {
  res.statusCode(200).json({ message: "server running successfully" });
});

app.listen(process.env.PORT, () => {
  console.log("server connected");
});
