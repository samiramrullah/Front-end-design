const express=require('express');
const router=express.Router();
const productSchema=require('../../models/Product');
const mongoose=require('mongoose');
const multer=require('multer')
const checkAuth=require('../../middleware/check-auth')
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null,"./uploads");
     },
    filename: function (req, file, cb) {
        cb(null , file.originalname);
    }
});
var upload = multer({ storage: storage })
router.get('/',(req,res,next)=>{
   productSchema.find()
   .select('name price _id')
   .exec()
   .then(docs=>{
   const response={
    count:docs.length,
    products:docs,
   }
   res.status(200).json(response)
   })
   .catch(err=>{
    res.status(200).json({
        error:err
    })
   })
});

router.post('/',upload.single('productImage'),(req,res,next)=>{
    console.log(req.body,req.file,req.files);

    const product=new productSchema({
        _id:new mongoose.Types.ObjectId,
        name:req.body.name,
        price:req.body.price
    });
    product.save().then(result=>{
        console.log('data saved');
    }).catch(err=>console.log(err))
    res.status(200).json({
        message:'Product Created',
        product
    })
});
router.post('/:id',(req,res,next)=>{
    const id=req.params.id;
    res.status(200).json({
        message:'I am post',
        id:id
    })
});
router.get('/:id',(req,res,next)=>{
    const id=req.params.id;
    productSchema.findById(id)
    .exec()
    .then(doc=>{
        if(doc)
        {
            res.status(200).json(doc);
        }else{
            res.status(404).json({message:'No entry for provided id'});
        }
        
    })
    .catch(err=>res.status(500).json({error:err}));
    // res.status(500).json({error:err})
});
router.delete('/:id',(req,res,next)=>{
    const id=req.params.id;
    productSchema.remove({_id:id})
    .exec()
    .then(res=>{
        res.status(200).json(res)
    })
    .catch(err=>{
        res.status(500).json({message:'No Product with provided id'});
    })
});
router.patch('/:id',(req,res,next)=>{
    const id=req.params.id;
    console.log(id);
    productSchema.updateOne(({_id:id},{$set:{name:req.body.name,price:req.body.price}}))
    .exec()
    .then(res=>{
        res.status(200).json(res)
    })
    .catch(err=>{res.status(500).json(err)})
});
module.exports=router;