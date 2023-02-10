
const {Router} = require("express");
const router = Router();
const {mensajesController} = require("../controlador/controlador");

router.post("/mensajes", mensajesController);

module.exports = router; 