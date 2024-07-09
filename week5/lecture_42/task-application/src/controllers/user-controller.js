const User = require("../models/User");

const addNewUser = async (req, res) => {
    try {
        const { name, email, age, password } = req.body;
        const user = new User({ name, email, age, password });
        await user.save();
        const token = user.generateToken();
        return res.status(201).send({ user, token });
    } catch (err) {
        console.log(err);
        return res.status(500).send({ message: err.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findByEmailAndPasswordForAuth(email, password);
        const token = user.generateToken();
        console.info(`User with Email: ${email} successfully logged in.`);
        return res.status(200).send({ user, token });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: "Login Failed!" });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { user } = req;
        const userId = user._id;
        const deleteResult = await User.deleteOne({ _id: userId });
        if (!deleteResult.deletedCount) {
            console.error(`Delete failed: User with id: ${userId} was not found.`);
            return res.status(404).send({ message: `Delete failed: User with id: ${userId} was not found.` });
        }
        console.info(`Delete Success: User with ID: ${userId} was deleted.`);
        return res.status(200).send({ message: "Deleted Successfully" });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: "Delete Failed!" });
    }
};

module.exports = { addNewUser, loginUser, deleteUser };
