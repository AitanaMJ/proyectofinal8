const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const routerMensajes = require ("./src/route/mensajesRout");
const userRout = require ("./src/route/userRout");

app.use(express.json())
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(routerMensajes);
app.use(userRout);

module.exports = app;