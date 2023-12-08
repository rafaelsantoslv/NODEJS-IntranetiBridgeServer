const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const tabRamais = require("@models/tabramais");

//ADICIONAR RAMAL
const adicionaRamal = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(401).json({ status: 401, message: errors.array() });
    }

    const {
      ramal,
      status,
      registro,
      senha,
      nomeOperador,
      anydesk,
      instalacao,
      empresa,
    } = req.body;

    const addRamal = await tabRamais.create({
      ramal: ramal,
      status: status,
      registro: registro,
      senha: senha,
      nomeOperador: nomeOperador,
      anydesk: anydesk,
      instalacao: instalacao,
      empresa: empresa,
    });
    return res
      .status(201)
      .json({ status: 201, message: "created", data: req.user });
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Erro ao enviar registro", error: error });
  }
};

// LISTAR RAMAIS

const listaRamais = async (req, res) => {
  try {
    const ramais = await tabRamais.findAll();
    return res
      .status(200)
      .json({ status: 201, message: "Sucess", response: ramais });
  } catch (error) {
    return res
      .status(401)
      .json({ status: 401, message: "error!", error: error });
  }
};

// UPDATE RAMAL

const atualizaRamal = async (req, res) => {
  try {
    const ramalId = req.params.id;

    const {
      ramal,
      status,
      registro,
      senha,
      nomeOperador,
      anydesk,
      instalacao,
      empresa,
    } = req.body;

    const existingRamal = await tabRamais.findByPk(ramalId);

    if (!existingRamal) {
      return res
        .status(401)
        .json({ status: 401, message: "Ramal não encontrado" });
    }

    existingRamal.ramal = ramal;
    existingRamal.status = status;
    existingRamal.registro = registro;
    existingRamal.senha = senha;
    existingRamal.nomeOperador = nomeOperador;
    existingRamal.anydesk = anydesk;
    existingRamal.instalacao = instalacao;
    existingRamal.empresa = empresa;

    await existingRamal.save();

    return res
      .status(200)
      .json({ status: 401, message: "Ramal atualizado com sucesso" });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Erro ao atualizar ramal",
      error: error.message,
    });
  }
};

// SELECIONA RAMAL

const selecionaRamal = async (req, res) => {
  try {
    const ramalId = req.params.id;

    const existingRamal = await tabRamais.findByPk(ramalId);

    if (!existingRamal) {
      res.status(401).json({ status: 401, message: "Ramal não encontrado" });
    }

    res
      .status(200)
      .json({ status: 200, message: "Dados do ramal", data: existingRamal });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Erro ao obter detalhes do ramal",
      error: error.message,
    });
  }
};

module.exports = {
  adicionaRamal,
  listaRamais,
  selecionaRamal,
  atualizaRamal,
};
