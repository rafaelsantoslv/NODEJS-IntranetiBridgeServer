const express = require("express");
const { validateAuth } = require("@middleware/authMiddleware");
const { validateRamal } = require("@middleware/ramalMiddleware");
const { verificaToken } = require("@middleware/jwtMiddleware");

const ramalController = require("@controllers/ramalController");
const loginController = require("@controllers/loginController");

const routes = express.Router();

// ROTAS DE AUTH e REGISTER
routes.get(
  "/api/auth",
  validateAuth("verificaUser"),
  loginController.verificaLogin,
);
routes.post(
  "/api/auth",
  validateAuth("verificaRegistro"),
  loginController.verificaRegistro,
);

//// ROTAS DE RAMAL ////

// ADICIONAR RAMAL
routes.post(
  "/api/ramal",
  verificaToken,
  validateRamal("verificaRamal"),
  ramalController.adicionaRamal,
);

// LISTA RAMAL
routes.get("/api/ramal", verificaToken, ramalController.listaRamais);

// SELECIONA RAMAL

routes.get("/api/ramal/:id", verificaToken, ramalController.selecionaRamal);

// UPDATE RAMAL
routes.put("/api/ramal/:id", verificaToken, ramalController.atualizaRamal);

module.exports = routes;
