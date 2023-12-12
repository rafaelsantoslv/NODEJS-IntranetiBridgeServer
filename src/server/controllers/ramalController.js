const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const tabRamais = require("@models/tabramais");

//ADICIONAR RAMAL
const adicionaRamal = async (req, res, next) => {
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
      .json({ status: 201, message: "Created", data: req.user });
  } catch (error) {
    next(error);
  }
};

// LISTAR RAMAIS

const listaRamais = async (req, res, next) => {
  try {
    // throw new Error("Erro simulado");

    const ramais = await tabRamais.findAll();
    return res
      .status(200)
      .json({ status: 201, message: "Sucess", response: ramais });
  } catch (error) {
    next(error);
  }
};

// UPDATE RAMAL

const atualizaRamal = async (req, res, next) => {
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
    next(error);
  }
};

// SELECIONA RAMAL

const selecionaRamal = async (req, res, next) => {
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
    next(error);
  }
};

// DELETA RAMAL
const deleteRamal = async (req, res, next) => {
  const ramalId = req.params.id;

  try {
    const existingRamal = await tabRamais.findByPk(ramalId);

    if (!existingRamal) {
      return res
        .status(404)
        .json({ status: 404, message: "Ramal não encontrado" });
    }

    await existingRamal.destroy();

    return res
      .status(200)
      .json({ status: 200, message: "Ramal excluído com sucesso" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  adicionaRamal,
  listaRamais,
  selecionaRamal,
  atualizaRamal,
  deleteRamal,
};
