const express = require("express");
const { validateAuth } = require("@middleware/authMiddleware")
const loginController = require("@controllers/loginController");

const routes = express.Router();


// ROTAS DE AUTH e REGISTER
routes.get("/api/auth", validateAuth("verificaUser"), loginController.verificaLogin);
routes.post("/api/auth", validateAuth("verificaRegistro"), loginController.verificaRegistro);



module.exports = routes;
