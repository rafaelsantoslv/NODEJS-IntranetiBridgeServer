const express = require("express");
const { validateAuth, validateRamal } = require("@middleware/authMiddleware")
const loginController = require("@controllers/loginController");
const ramalController = require("@controllers/ramalController");

const routes = express.Router();


// ROTAS DE AUTH e REGISTER
routes.get("/api/auth", validateAuth("verificaUser"), loginController.verificaLogin);
routes.post("/api/auth", validateAuth("verificaRegistro"), loginController.verificaRegistro);



// ROTAS DE
routes.post("/api/ramal", validateRamal("verificaRamal"), ramalController.adicionaRamal)



module.exports = routes;
