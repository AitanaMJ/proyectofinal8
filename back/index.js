const app = require("./app");
require("./database");

const main = () => {
   app.listen(8000, () => {console.log("escuchando correctamente")})
}
main();
