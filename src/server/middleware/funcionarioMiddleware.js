const { body } = require("express-validator");

const validateFuncionario = (method) => {
  switch (method) {
    case "verificaFuncionario":
      return [
        body("firstname")
          .notEmpty()
          .isString()
          .withMessage(
            'O campo "firstname" é obrigatório e deve ser uma string.',
          ),
        body("secondname")
          .notEmpty()
          .isString()
          .withMessage(
            'O campo "secondname" é obrigatório e deve ser uma string.',
          ),
        body("datanasc")
          .optional()
          .isISO8601()
          .withMessage(
            'O campo "datanasc" deve ser uma data no formato ISO8601.',
          ),
        body("nationality")
          .optional()
          .isString()
          .withMessage('O campo "nationality" deve ser uma string.'),
        body("education")
          .optional()
          .isString()
          .withMessage('O campo "education" deve ser uma string.'),
        body("localnasc")
          .optional()
          .isString()
          .withMessage('O campo "localnasc" deve ser uma string.'),
        body("statenasc")
          .optional()
          .isString()
          .withMessage('O campo "statenasc" deve ser uma string.'),
        body("numcell")
          .optional()
          .isString()
          .withMessage('O campo "numcell" deve ser uma string.'),
        body("email")
          .optional()
          .isEmail()
          .withMessage(
            'O campo "email" deve ser um endereço de e-mail válido.',
          ),
        body("address")
          .optional()
          .isString()
          .withMessage('O campo "address" deve ser uma string.'),
        body("numaddress")
          .optional()
          .isInt()
          .withMessage('O campo "numaddress" deve ser um número inteiro.'),
        body("complemento")
          .optional()
          .isString()
          .withMessage('O campo "complemento" deve ser uma string.'),
        body("neighborhood")
          .optional()
          .isString()
          .withMessage('O campo "neighborhood" deve ser uma string.'),
        body("county")
          .optional()
          .isString()
          .withMessage('O campo "county" deve ser uma string.'),
        body("cep")
          .optional()
          .isInt()
          .withMessage('O campo "cep" deve ser um número inteiro.'),
        body("state")
          .optional()
          .isString()
          .withMessage('O campo "state" deve ser uma string.'),
        body("rg")
          .optional()
          .isInt()
          .withMessage('O campo "rg" deve ser um número inteiro.'),
        body("datacadastrorg")
          .optional()
          .isISO8601()
          .withMessage(
            'O campo "datacadastrorg" deve ser uma data no formato ISO8601.',
          ),
        body("cpf")
          .optional()
          .isInt()
          .withMessage('O campo "cpf" deve ser um número inteiro.'),
        body("rgemissor")
          .optional()
          .isString()
          .withMessage('O campo "rgemissor" deve ser uma string.'),
        body("tituloeleitoral")
          .optional()
          .isInt()
          .withMessage('O campo "tituloeleitoral" deve ser um número inteiro.'),
        body("zone")
          .optional()
          .isInt()
          .withMessage('O campo "zone" deve ser um número inteiro.'),
        body("section")
          .optional()
          .isInt()
          .withMessage('O campo "section" deve ser um número inteiro.'),
        body("namepai")
          .optional()
          .isString()
          .withMessage('O campo "namepai" deve ser uma string.'),
        body("namemae")
          .optional()
          .isString()
          .withMessage('O campo "namemae" deve ser uma string.'),
        body("carteiratrab")
          .optional()
          .isInt()
          .withMessage('O campo "carteiratrab" deve ser um número inteiro.'),
        body("seriecarteiratrab")
          .optional()
          .isInt()
          .withMessage(
            'O campo "seriecarteiratrab" deve ser um número inteiro.',
          ),
        body("pis")
          .optional()
          .isInt()
          .withMessage('O campo "pis" deve ser um número inteiro.'),
        body("datacadastroctps")
          .optional()
          .isISO8601()
          .withMessage(
            'O campo "datacadastroctps" deve ser uma data no formato ISO8601.',
          ),
        body("funcao")
          .optional()
          .isString()
          .withMessage('O campo "funcao" deve ser uma string.'),
        body("cargahoraria")
          .optional()
          .isInt()
          .withMessage('O campo "cargahoraria" deve ser um número inteiro.'),
        body("dataadmissao")
          .optional()
          .isISO8601()
          .withMessage(
            'O campo "dataadmissao" deve ser uma data no formato ISO8601.',
          ),
        body("salario")
          .optional()
          .isDecimal()
          .withMessage('O campo "salario" deve ser um número decimal.'),
        body("gender")
          .optional()
          .isString()
          .withMessage('O campo "gender" deve ser uma string.'),
        body("maritalStatus")
          .optional()
          .isString()
          .withMessage('O campo "maritalStatus" deve ser uma string.'),
        body("hasDisability")
          .optional()
          .isBoolean()
          .withMessage('O campo "hasDisability" deve ser um valor booleano.'),
      ];
  }
};

module.exports = {
  validateFuncionario,
};
