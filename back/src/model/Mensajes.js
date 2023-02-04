const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const mensajesSchema = new Schema({
    nombre:{
        type: String,
        require: true
    },
    email:{
        type: String,
        required: true
    },
    mensasje:{
        type: String,
        require: true
    }
},{collection: "mensajes"});

module.exports = mongoose.model("mensajes", mensajesSchema);