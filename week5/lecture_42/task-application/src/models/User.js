const {model,Schema}= require("mongoose");
const UserSchema =new Schema({
    name:{type:String,required:true,trim:true},
    email:{type:String,required:true,trim:true,unique:true,required:true},
    age:{type:Number, required:true},
    password:{type:String,required:true,trim:true,minlength:8},
},
{timestamps:true}
);

const User=model("User",UserSchema);

module.exports=User;
