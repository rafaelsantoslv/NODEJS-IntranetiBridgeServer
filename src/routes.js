const express = require("express");
const routes = express.Router();
const { getAllUsers } = require("./app/controllers/ramalController");
const {
  verificaLogin,
  validateLogin,
} = require("./app/controllers/loginController");

routes.get("/", (req, res) => {
  console.log("TESTE ENDPOINT /");
  return res.status(200).json({
    message: "ENDPOINT TESTADO",
  });
});

// DEFINIÇÃO DE ROTAS LOGIN
routes.get("/login", validateLogin("verificaUser"), verificaLogin);

// DEFINIÇÃO DE ROTAS RAMAL
routes.get("/users", getAllUsers);

module.exports = routes;
