const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const OrderSchema=require('../../models/Order');
const ProductSchema=require('../../models/Product');
router.get('/',(req,res,next)=>{
   OrderSchema.find()
   .select('_id product quantity')
   .populate('product','name')
   .exec()
   .then(result=>res.status(400).json(result))
   .catch(err=>res.status(500).json({
    message:" No orders present"
   }))
});
router.post('/',(req,res,next)=>{
    ProductSchema.findById(req.body.productId)
    .then(product=>{
        if(!product)
        {
            return res.status(404).json({
                message:"Product not found"
            })
        }
        const order=new OrderSchema({
            _id:new mongoose.Types.ObjectId,
            quantity:req.body.quantity,
            product:req.body.productId,
        });
       return order.save()
        .then(result=>{
            res.status(201).json(result);
        })
        .catch(err=>{
            res.status(500).json(err);
        })
    })
    .catch(err=>{
        res.status(500).json({
            message:"Product Not found",
            error:err
        })
    })
    console.log(req.body);
    
});
router.post('/:id',(req,res,next)=>{
    const id=req.params.id;
   ProductSchema.findById(id)
   .exec()
   .then(product=>{
    if (!product)
    {
       return res.status(200).json({
        message:"No product is present with mentioned id"
       })

    }
    else{
        return res.status(500).json({
            message:"No orders is present with provided id"
        })
    }
   })
   .catch(err=>res.status(500).json(err))
});
router.get('/:id',(req,res,next)=>{
    const id=req.params.id;
    res.status(200).json({
        message:'I am get orders',
        id:id
    })
});
router.delete('/:id',(req,res,next)=>{
    const id=req.params.id;
    res.status(200).json({
        message:'I am delete orders',
        id:id
    })
});
router.patch('/:id',(req,res,next)=>{
    const id=req.params.id;
    res.status(200).json({
        message:'I am patch orders',
        id:id
    })
});
module.exports=router;