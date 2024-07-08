// const {model,Schema}= require("mongoose");
// const {isEmail}=require("validator");
// const UserSchema =new Schema({
//     name:{type:String,required:true,trim:true},
//     email:{type:String,required:true,trim:true,unique:true,lowerCase:true,required:true,validate:{validator(email){
//         return isEmail(email);
//     }}},
//     age:{type:Number, required:true,valitdator:{validate(age){
//         if(age<0){
//             throw new Error("Age must be greater than 0");
//         }
//         return true;

//     }}},
//     password:{type:String,required:true,trim:true,minlength:8,validate:{validator(password){
//         if(password.includes(" ") || password.includes("\n")||password.includes("\t")){
//             throw new Error("Password cannot contain spaces or tabs");
//         }
//         if(password.toLowerCase().includes("password")){
//             throw new Error("Password cannot contain the word password");
//         }
//     },},},
// },
// {timestamps:true}
// );
// UserSchema.statics.findByEmailAndPasswordForAuth=async(email,password)=>{
//     try{
//         const user= await User.findOne({email});
//         if(!user){
//             throw new Error("No user with that email");
//         }
//         if(password!== user.password){
//             throw new Error("Incorrect password");
//         }
//         console.log("Logged in successfully");
//         return user;


//     }
//     catch(err){
//         console.error(err);
//         throw err;
//     }
// }
// const User=model("User",UserSchema);

// module.exports=User;



const { model, Schema } = require("mongoose");
const { isEmail } = require("validator");

const UserSchema = new Schema({
    name: { type: String, required: true, trim: true },
    email: { 
        type: String, 
        required: true, 
        trim: true, 
        unique: true, 
        lowercase: true, 
        validate: { 
            validator(email) {
                return isEmail(email);
            }
        } 
    },
    age: { 
        type: Number, 
        required: true, 
        validate: { 
            validator(age) {
                if (age < 0) {
                    throw new Error("Age must be greater than 0");
                }
                return true;
            } 
        }
    },
    password: { 
        type: String, 
        required: true, 
        trim: true, 
        minlength: 8, 
        validate: { 
            validator(password) {
                if (password.includes(" ") || password.includes("\n") || password.includes("\t")) {
                    throw new Error("Password cannot contain spaces or tabs");
                }
                if (password.toLowerCase().includes("password")) {
                    throw new Error("Password cannot contain the word 'password'");
                }
            }
        }
    }
}, { timestamps: true });

UserSchema.statics.findByEmailAndPasswordForAuth = async (email, password) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error("No user with that email");
        }
        if (password !== user.password) {
            throw new Error("Incorrect password");
        }
        console.log("Logged in successfully");
        return user;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

const User = model("User", UserSchema);

module.exports = User;
