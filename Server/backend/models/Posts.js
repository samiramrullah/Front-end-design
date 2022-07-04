const mongoose=require('mongoose');

const postSchema=mongoose.Schema({
    userID:{type:mongoose.Schema.Types.ObjectId,ref:"Users",required:true},
    // product:{type:mongoose.Schema.Types.ObjectId,ref:'Products',},
    countryToSend:{type:String, required:true},
    countryToRecieve:{type:String,required:true},
    amount:{
        type:Number,
        required:true,
    },
})
module.exports=mongoose.model('Posts',postSchema)