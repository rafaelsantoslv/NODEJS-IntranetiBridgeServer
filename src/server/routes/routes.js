const express = require("express");
const { validateAuth } = require("@middleware/authMiddleware");
const { validateRamal } = require("@middleware/ramalMiddleware");
const { verificaToken } = require("@middleware/jwtMiddleware");
const { validateFuncionario } = require("@middleware/funcionarioMiddleware");

const ramalController = require("@controllers/ramalController");
const loginController = require("@controllers/loginController");
const funcionarioController = require("@controllers/funcionarioController");

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

/////////////////////////////////////////////////////////////////// ROTAS DE RAMAL ////////////////////////////////////////////////////

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

// DELETE RAMAL
routes.delete("/api/ramal/:id", verificaToken, ramalController.deleteRamal);

//////////////////////////////////////////////////////////////////// ROTAS FUNCIONÁRIO //////////////////////////////////////////////////

// ADICIONAR FUNCIONÁRIO
routes.post(
  "/api/funcionario",
  verificaToken,
  validateFuncionario("verificaFuncionario"),
  funcionarioController.adicionarFuncionario,
);

// LISTAR FUNCIONÁRIOS
routes.get(
  "/api/funcionario",
  verificaToken,
  funcionarioController.listarFuncionarios,
);

// UPDATE FUNCIONÁRIO
routes.put(
  "/api/funcionario/:id",
  verificaToken,
  funcionarioController.atualizaFuncionario,
);

// SELECIONA FUNCIONÁRIO
routes.get(
  "/api/funcionario/:id",
  verificaToken,
  funcionarioController.selecionaFuncionario,
);
// DELETE RAMAL
routes.delete(
  "/api/funcionario/:id",
  verificaToken,
  funcionarioController.deleteFuncionario,
);

module.exports = routes;
