const { body } = require("express-validator");

const validateRamal = (method) => {
  switch (method) {
    case "verificaRamal":
      return [
        body("ramal")
          .isLength({ min: 4, max: 10 })
          .withMessage("Ramal precisa ser de 4 a 10 digitos")
          .exists()
          .withMessage("Número do Ramal é Obrigatório"),
        body("senha")
          .isLength({ min: 5, max: 20 })
          .withMessage("Senha Inválida. Deve ter entre 5 a 20 caracteres.")
          .exists()
          .withMessage("Senha é obrigatória"),
        body("nomeOperador").exists().withMessage("Nome é Obrigatório"),
        body("empresa").exists().withMessage("Empresa é obrigatório"),
      ];
  }
};

module.exports = {
  validateRamal,
};
