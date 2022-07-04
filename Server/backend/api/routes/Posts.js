const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const checkAuth=require('../../middleware/check-auth')
const postSchema=require('../../models/Posts')
router.post('/',checkAuth,(req,res,next)=>{
    // console.log(req.body);
    const newpost=new postSchema({
        countryToSend:req.body.countryToSend,
        countryToRecieve:req.body.countryToRecieve,
        amount:req.body.amount,
        userID:req.body.userId
    });
      
    try {
        newpost.save().then(result=>{
            console.log('data saved');
        }).catch(err=>console.log(err))
        res.status(200).json({
            message:'POSTED',
            newpost
        })
    } catch (err) {
        res.status(500).json({error:err})
    }
});

module.exports=router;