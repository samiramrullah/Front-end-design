const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserSchema = require("../../models/User");
const { token } = require("morgan");
const multer = require("multer");
const checkAuth = require("./CheckAuth");

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./usersImage");
//   },
//   filename: function (req, res, cb) {
//     cb(null, file.orignalname);
//   },
// });
// var upload = multer({ storage: storage });

router.post("/signup", (req, res, next) => {
  UserSchema.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length >= 1) {
        return res.status(422).json({
          message: "Email already exists",
        });
      } else {
        bcrypt.hash(req.body.password, 12, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err,
            });
          } else {
            const user = new UserSchema({
              _id: new mongoose.Types.ObjectId(),
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              phoneNumber: req.body.phoneNumber,
              email: req.body.email,
              password: hash,
            });
            user
              .save()
              .then((result) =>
                res.status(201).json({
                  message: "User Created",
                })
              )
              .catch((err) => {
                res.status(500).json({
                  error: err,
                });
              });
          }
        });
      }
    })
    .catch((err) => {
      return res.status(422).json(err);
    });
  router.post("/", (req, res, next) => {
    console.log(req.params.userId);
    UserSchema.remove({ _id: req.params.userId })
      .exec()
      .then((result) =>
        res.status(200).json({
          message: "Unser Removed",
        })
      )
      .catch((err) => res.body.json({ error: err }));
  });
});

// upload.single('UserImage')

router.get("/:userId", async (req, res, next) => {
  try {
    const id = req.params.userId;
    UserSchema.findById(id)
      .select("firstName lastName email phoneNumber address")
      .exec()
      .then((docs) => {
        res.status(200).json(docs);
      })
      .catch((err) => {
        res.status(200).json({
          error: err,
        });
      });
  } catch (error) {
    res.status(400).json({
      message: "Error in fetching data",
    });
  }
});

router.post("/login", (req, res, next) => {
  UserSchema.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "Invalid Credentials",
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Invalid Credentials",
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              email: user[0].email,
              userId: user[0]._id,
            },
            process.env.JWT_TOKEN_KEY,
            {
              expiresIn: "2h",
            }
          );
          return res.status(200).json({
            message: "Logged in successfull",
            token: token,
          });
        }
        return res.status(401).json({
          message: "Invalid Credentials",
        });
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

router.post("/:userId", async (req, res, next) => {
  try {
    const userId = req.params.userId;
    console.log(req.body);
    const updateUser = await UserSchema.findByIdAndUpdate(
      { _id: userId },
      req.body,
      { new: true }
    );
    res.send(updateUser);
  } catch (error) {
    res.status(401).send("Error Occured");
  }
});
module.exports = router;
