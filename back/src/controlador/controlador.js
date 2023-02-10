

const {saveMensajeService} = require("../servicio/Servicio");

const mensajesController = async (req, res) => {
  try {
    const { firstname, email, message } = req.body;
    let response = await saveMensajeService(firstname, email, message);
    if (response) {
      res.json({ response: "mensaje enviado exitosamente" });
    } else {
      res.status(400).json({ response: "error al enviar mensaje" });
    }
  } catch (error) {

  }
}

module.exports = { mensajesController};