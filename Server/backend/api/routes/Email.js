const express=require('express')
const router=express.Router();

router.post('/',(req,res,next)=>{
    res.status(200).json({
        message:"Message Sent"
    })
})
module.exports=router;