const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
    id:{
        type: String,
        required: true
    },
    firstname:{
        type: String,
        require: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        require: true
    }
},{collection: "users"});

module.exports = mongoose.model("user", userSchema);