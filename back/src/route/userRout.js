
const {Router} = require("express");
const router = Router();
const {saveUserController, loginUserController} = require("../controlador/userControler");

router.post("/users/register", saveUserController);
router.post("/users/login", loginUserController);

module.exports = router; 