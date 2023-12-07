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
  
const validateRamal = (method) => {
  switch(method) {
    case "verificaRamal":
      return [
        body("ramal").isLength({min: 4, max: 10}).withMessage("Ramal precisa ser de 4 a 10 digitos").exists().withMessage("Número do Ramal é Obrigatório"),
        body("senha").isLength({min: 5, max: 20}).withMessage("Senha Inválida. Deve ter entre 5 a 20 caracteres.").exists().withMessage("Senha é obrigatória"),
        body("nomeOperador").exists().withMessage("Nome é Obrigatório"),
        body("empresa").exists().withMessage("Empresa é obrigatório")
      ]
  }
}

module.exports = {
    validateAuth,
    validateRamal
}