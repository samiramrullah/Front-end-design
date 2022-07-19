const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const checkAuth = require("../../middleware/check-auth");
const postSchema = require("../../models/Posts");
router.post("/", checkAuth, (req, res, next) => {
  try {
    console.log(req.body.amount);
    let date = new Date().toUTCString();
    date = String(date);
    const newpost = new postSchema({
      countryToSend: req.body.countryToSend,
      countryToRecieve: req.body.countryToRecieve,
      amount: req.body.amount,
      userID: req.body.userId,
      datetime: date,
    });
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
  } catch (error) {
    res.status(500).json({ error: err });
  }

  // console.log(date);

//   try {
//   } catch (err) {
    
//   }
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
    res.status(400).json({ Error: "Invalid Credentials" });
  }
});
router.post("/updatebyId/:postId", async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const fn = (obj) =>
      Object.fromEntries(
        Object.entries(obj).filter(([, v]) => v !== null) || v !== "undifined"
      );
    const filterdata = fn(req.body);
    const updatedPost = await postSchema.findByIdAndUpdate(
      { _id: postId },
      filterdata
    );
    res.status(200).json({
      message: "Post Updated Successfully",
      postId: updatedPost,
    });
  } catch (error) {
    res.status(400).json({
      Error: "Something Went Wrong",
    });
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
