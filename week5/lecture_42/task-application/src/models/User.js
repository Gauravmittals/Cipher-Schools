const { model, Schema } = require("mongoose");
const { isEmail } = require("validator");
const { encryptPassword, checkPassword } = require("../bcrypt");
const { generateToken } = require("../jwt");

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
        const isMatch = await checkPassword(password, user.password); // Await for the promise to resolve
        if (!isMatch) {
            throw new Error("Incorrect password");
        }
        console.log("Logged in successfully");
        return user;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

UserSchema.pre("save", async function(next) {
    const user = this;
    if (user.modifiedPaths().includes("password")) {
        user.password = await encryptPassword(user.password);
    }
    next();
});

UserSchema.methods.generateToken = function() {
    const user = this;
    const token = generateToken({ _id: user._id.toString() }); // Ensure the token uses _id
    return token;
};

const User = model("User", UserSchema);

module.exports = User;
