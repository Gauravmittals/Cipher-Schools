const { verifyToken } = require("../jwt");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(400).send({ message: "Please send a token" });
    }

    const token = authorization.substring(7);
    const { isValidToken, payload } = verifyToken(token);

    if (isValidToken && payload) {
        try {
            const user = await User.findById(payload._id);
            if (!user) {
                console.warn("User not found");
                return res.status(403).send({ message: "User not found" });
            }
            req.token = token;
            req.user = user;
            next();
        } catch (err) {
            console.error("Error finding user:", err);
            return res.status(500).send({ message: "Internal server error" });
        }
    } else {
        console.warn("Token is invalid or payload is missing");
        return res.status(403).send({ message: "Please use a valid token!" });
    }
};

module.exports = authMiddleware;
