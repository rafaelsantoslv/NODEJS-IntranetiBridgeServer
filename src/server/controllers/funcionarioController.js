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

const listarFuncionarios = async (req, res) => {
  try {
    const funcionarios = await tabfuncionarios.findAll();
    return res
      .status(200)
      .json({ status: 201, message: "Sucess", respose: funcionarios });
  } catch (error) {
    return res
      .status(401)
      .json({ status: 401, message: "Error!", error: error });
  }
};

const atualizaFuncionario = async (req, res) => {
  try {
    const funcionarioId = req.params.id;

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

    const existingFuncionario = await tabfuncionarios.findByPk(funcionarioId);

    if (!existingFuncionario) {
      return res
        .status(401)
        .json({ status: 401, message: "Funcionário não encontrado" });
    }

    await existingFuncionario.update({
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

    res.status(200).json({ message: "registro atualizado com sucesso" });
  } catch (error) {
    console.error("Erro ao atualizar registro:", error);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
};

const selecionaFuncionario = async (req, res) => {
  try {
    const funcionarioId = req.params.id;
    const existingFuncionario = await tabfuncionarios.findByPk(funcionarioId);
    if (!existingFuncionario) {
      return res
        .status(401)
        .json({ status: 401, message: "Funcionário não encontrado" });
    }

    res
      .status(200)
      .json({ status: 200, message: "sucess", data: existingFuncionario });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 500,
      message: "Erro ao obter dados do funcionário",
      error: error,
    });
  }
};

const deleteFuncionario = async (req, res) => {
  const funcionarioId = req.params.id;

  try {
    const existingFuncionario = await tabfuncionarios.findByPk(funcionarioId);

    if (!existingFuncionario) {
      return res
        .status(404)
        .json({ status: 404, message: "Funcionário não encontrado" });
    }

    await existingFuncionario.destroy();

    return res
      .status(200)
      .json({ status: 200, message: "Funcionário excluído" });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Erro ao excluir funcionário",
      error: error.message,
    });
  }
};
module.exports = {
  adicionarFuncionario,
  listarFuncionarios,
  atualizaFuncionario,
  deleteFuncionario,
  selecionaFuncionario,
};
