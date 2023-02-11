
const { registerUserService, loginUserService } = require("../servicio/userService");


const saveUserController = async (req, res) => {
  try {
    console.log(req);
    const { firstname, email, password } = req.body;
    const response = await registerUserService(firstname, email, password);
    if (response) {
      res.status(201).json({ response: "usuario creado correctamente" });
    } else {
      res.status(400).json({ response: "problema al registrar nuevo usuario" });
    }
  } catch (error) {
    return false;
  }
}

const loginUserController = async (req, res) => {
 
  const { email, password } = req.body;
  const response = await loginUserService(email, password);
  if (response !== "") {
    res.json({ response: "vienvenido"});
  } else {
    res.status(404).json({ error: "problema al igresar" });
  }
}



module.exports = { saveUserController, loginUserController };