const { body, validationResult } = require("express-validator");
const tabfuncionarios = require("@models/tabfuncionarios");

const adicionarFuncionario = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty(0)) {
      return res.status(401).json({ status: 401, message: errors.array() });
    }

    const {
      firstname,
      secondname,
      datanasc,
      nationality,
      education,
      localnasc,
      statenasc,
      numcell,
      email,
      address,
      numaddress,
      complemento,
      neighborhood,
      county,
      cep,
      state,
      rg,
      datacadastrorg,
      cpf,
      rgemissor,
      tituloeleitoral,
      zone,
      section,
      namepai,
      namemae,
      carteiratrab,
      seriecarteiratrab,
      pis,
      datacadastroctps,
      funcao,
      cargahoraria,
      dataadmissao,
      salario,
      gender,
      maritalStatus,
      hasDisability,
    } = req.body;

    const addFuncionario = await tabfuncionarios.create({
      firstname,
      secondname,
      datanasc,
      nationality,
      education,
      localnasc,
      statenasc,
      numcell,
      email,
      address,
      numaddress,
      complemento,
      neighborhood,
      county,
      cep,
      state,
      rg,
      datacadastrorg,
      cpf,
      rgemissor,
      tituloeleitoral,
      zone,
      section,
      namepai,
      namemae,
      carteiratrab,
      seriecarteiratrab,
      pis,
      datacadastroctps,
      funcao,
      cargahoraria,
      dataadmissao,
      salario,
      gender,
      maritalStatus,
      hasDisability,
    });
    return res.status(201).json({ status: 201, message: "Created" });
  } catch (error) {
    console.log(error);
    return res
      .status(401)
      .json({ message: "Erro ao enviar registro", error: error });
  }
};

module.exports = {
  adicionarFuncionario,
};
