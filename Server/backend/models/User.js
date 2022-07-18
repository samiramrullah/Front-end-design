const mongoose=require('mongoose');

const UserSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    firstName:{type:String,required:true},
    lastName:{type:String},
    phoneNumber:{type:String},
    email:{type:String ,required:true, unique:true,
    match:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password:{type:String},
    address:{type:String},
    profilePhoto:{type:String}
});
module.exports=mongoose.model('Users',UserSchema)