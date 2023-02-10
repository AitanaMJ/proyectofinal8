const app = require("./app");
require("./database");

const main = () => {
   app.listen(8000, () => {console.log("escuchando por el puerto 8000")})
}
main();
