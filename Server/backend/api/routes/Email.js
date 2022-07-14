const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/", (req, res, next) => {
  var mail = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "startup.credadda@gmail.com",
      pass: "mvcvpvuytacwmcbg",
    },
    tls:{rejectUnauthorized:false}
  });
  var mailOption = {
    from: "startup.credadda@gmail.com",
    to: "samiramrullah@gmail.com",
    subject: "sending demo mail",
    text: `hello`,
  };
  mail.sendMail(mailOption, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent" + info.response);
    }
  });
  res.status(200).json({
    message: "Message Sent",
  });
});
module.exports = router;
