const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const checkAuth = require("../../middleware/check-auth");
const postSchema = require("../../models/Posts");
router.post("/", checkAuth, (req, res, next) => {
  let date = new Date().toUTCString();
  date = String(date);
  console.log(date);
  const newpost = new postSchema({
    countryToSend: req.body.countryToSend,
    countryToRecieve: req.body.countryToRecieve,
    amount: req.body.amount,
    userID: req.body.userId,
    datetime: date,
  });
  console.log(date);
  try {
    newpost
      .save()
      .then((result) => {
        console.log("data saved");
      })
      .catch((err) => console.log(err));
    res.status(200).json({
      message: "POSTED",
      newpost,
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});
router.post("/userinfo", checkAuth, (req, res, next) => {
  try {
    userid = req.body.userId;
    postSchema
      .find({ userID: userid })
      .select("countryToSend countryToRecieve amount datetime")
      .populate("userID")
      .exec()
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(400).json(err));
  } catch (error) {
    console.log("here");
    res.status(400).json({ Error: "Invalid Credentials" });
  }
});
router.post("/deletepost", checkAuth, (req, res, next) => {
  try {
    postid = req.body.postId;
    postSchema
      .remove({ _id: postid })
      .exec()
      .then((result) => res.status(204).json(result))
      .catch((err) => res.status(400).json("Something went Wrong"));
  } catch (err) {
    res.status(400).json({
      message: "Something went wrong",
    });
  }
});

module.exports = router;
