const express=require('express')
const nodemailer=require('nodemailer');
const router=express.Router();


router.post('/',(req,res,next)=>{
let mailTransporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'startup.credadda@gmail.com',
		pass: 'Happylearning@2022'
	}
});

let mailDetails = {
	from: 'samiramrullah@gmail.com',
	to: 'startup.credadda@gmail.com',
	subject: 'Test mail',
	text: 'Node.js testing mail for GeeksforGeeks'
};

mailTransporter.sendMail(mailDetails, function(err, data) {
	if(err) {
		console.log("err");
	} else {
		console.log('Email sent successfully');
	}
});

    res.status(200).json({
        message:"Message Sent"
    })
})
module.exports=router;