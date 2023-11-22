const { body } = require("express-validator");


const validateAuth = (method) => {
    switch (method) {
      case "verificaUser":
        return [
          body("email").isEmail().withMessage("Email inválido").exists().withMessage("Email é obrigatório"),
          body("senha").isLength({ min: 3, max: 18 }).withMessage("Senha inválida. Deve ter entre 3 e 18 caracteres").exists().withMessage("Senha é obrigatória"),
        ];  
      case "verificaRegistro":
        return [
          body("email").isEmail().withMessage("Email inválido").exists().withMessage("Email é obrigatório"),
          body("senha").isLength({ min: 8, max: 18 }).withMessage("Senha inválida. Deve ter entre 8 e 18 caracteres").exists().withMessage("Senha é obrigatória"),
          body("nome").exists().withMessage("Nome é obrigatório"),
          body("tipo").isIn(["admin", "suporte", "gerente", "supervisor"]).withMessage("Tipo de usuário inválido")
        ];
    }
  };


  module.exports = {
    validateAuth
  }