
const Mensaje = require("../model/Mensajes");

const saveMensajeService = async (firstname, email, message) => {
    try {
        await Mensaje.create({
            firstname, 
            email, 
            message
        });
        return true;
    } catch (error) {
        return false;
    }
}

module.exports = {saveMensajeService};