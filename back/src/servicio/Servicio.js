
const Mensajes = require("../model/Mensajes");

const saveMensajeservice = async (Mensajes) => {
    try {
        await Mensajes.create({
            nombre, 
            email, 
            mensaje
        });
        return true;
    } catch (error) {
        return false;
    }
}

module.exports = {saveMensajeservice};