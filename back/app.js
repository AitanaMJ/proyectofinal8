const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const routerMensajes = require ("./src/route/mensajesRout");
const userRout = require ("./src/route/userRout");
const cors = require("cors")

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("access-Control-Allow-Headers", "Autorization, X-API-KEY, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.use(express.json())
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(routerMensajes);
app.use(userRout);
app.use(cors());

module.exports = app;