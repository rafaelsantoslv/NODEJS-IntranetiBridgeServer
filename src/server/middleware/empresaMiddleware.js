const { body } = require("express-validator");

const validateEmpresa = (method) => {
  switch (method) {
    case "verificaEmpresa":
      return [
        body("razaoSocial")
          .isString()
          .withMessage("Razão social deve ser uma string"),
        body("nomeFantasia")
          .isString()
          .withMessage("Nome fantasia deve ser uma string"),
        body("cnpj").isString().withMessage("CNPJ deve ser um número inteiro"),
        body("emailPrincipal")
          .isEmail()
          .withMessage("Email principal deve ser um email válido"),
        body("servico").isString().withMessage("Serviço deve ser uma string"),
        body("prefixo")
          .isString()
          .withMessage("Prefixo deve ser um número inteiro"),
      ];
  }
};

module.exports = {
  validateEmpresa,
};
