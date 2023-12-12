const { validationResult } = require("express-validator");
const tabEmpresas = require("@models/tabempresas");

const adicionarEmpresa = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(401).json({ status: 401, message: errors.array() });
    }

    const {
      razaoSocial,
      nomeFantasia,
      cnpj,
      emailPrincipal,
      servico,
      prefixo,
    } = req.body;
    console.log(req.body);

    const addEmpresa = await tabEmpresas.create({
      razaoSocial,
      nomeFantasia,
      cnpj,
      emailPrincipal,
      servico,
      prefixo,
    });

    return res.status(201).json({ status: 201, message: "Created" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  adicionarEmpresa,
};
