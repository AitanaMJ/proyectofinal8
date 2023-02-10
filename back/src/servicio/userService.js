const User = require("../model/usuarios");
const crypto = require("crypto");

const registerUserService = async (firstname, email, password) => {
    try {
        const id = crypto.randomUUID();
        await User.create({
            id,
            firstname,
            email,
            password
        });
        return true;
    } catch (error) {
        return false;
    }
}

const loginUserService = async (email, password) => {
    try {
        const user = await User.findOne({ email: email }).select("-id").select("-__v").select("-ide");
        if (user.password === password) {
            return user.firstname;
        } else {
            return "";
        }
    } catch (error) {
        return "";
    }
}

module.exports = { registerUserService, loginUserService};