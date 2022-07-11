const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/", (req, res, next) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'myemail  ',
          pass: 'app password'
        }
      });
      
      var mailOptions = {
        from: 'myemail',
        to: 'sender email',
        subject: 'Sending with modemailer',
        text: 'Hello World!'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log("error");
        } else {
          console.log('Successfully Sent');
        }
      });
  res.status(200).json({
    message: "Message Sent",
  });
});
module.exports = router;
