const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const routerMensajes = require ("./src/route/mensajesRout");

app.use(express.json())
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(routerMensajes);

module.exports = app;