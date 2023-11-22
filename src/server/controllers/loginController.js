const { body, validationResult } = require("express-validator");
const { validadeAuth } = require("@middleware/authMiddleware.js")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const tabUsers = require('@models/tabusers');


const verificaLogin = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(401).json({ status: 401, message: errors.array() });
    }

    const { email, senha } = req.body;
    const user = await tabUsers.findOne({ where: { email } });

    if (user) {
      const verificaSenha = await bcrypt.compare(senha, user.senha);

      if (verificaSenha) {
        const token = jwt.sign(
          { userId: user.id, email: user.email },
          process.env.JSONWEBTOKEN_SECRET,
          { expiresIn: '30m' }
        );

        return res
          .status(200)
          .json({ status: 200, message: 'Logado com sucesso', token });
      } else {
        return res
          .status(401)
          .json({ status: 401, message: 'Email ou senha incorreta' });
      }
    } else {
      return res
        .status(401)
        .json({ status: 401, message: 'Email ou Senha Incorreta' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro interno no servidor' });
  }
};

const verificaRegistro = async (req, res) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()) return res.status(401).json({status: 401, message: errors.array()})
  try {
    const {nome, email, senha, tipo, empresa} = req.body
    const encryptedPassword = await bcrypt.hash(senha, 10) 

    const addUser = await tabUsers.create({
      nome: nome,
      email: email,
      senha: encryptedPassword,
      tipo: tipo,
      empresa: empresa
    })

    return res.status(201).json({status: 201, message: "created"})
  } catch (error) {
    const messageError = error.original.sqlMessage
    return res.status(401).json({ message: 'Erro ao enviar registro', error: messageError });
  }
};



module.exports = {
  verificaLogin,
  verificaRegistro,
};
