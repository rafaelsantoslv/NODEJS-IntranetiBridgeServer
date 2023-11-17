const { body, validationResult } = require("express-validator");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const tabUsers = require('../models/tabusers');

const validateLogin = (method) => {
  switch (method) {
    case "verificaUser": {
      return [
        body("email", "email invalido").isEmail().exists(),
        body("senha", "senha Invalida").isLength({ min: 3, max: 18 }),
      ];
    }
    case "verificaRegistro": {
      return [
        body("email", "email invalido").isEmail().exists(),
        body("password", "Senha invalida").isLength({min: 8, max: 18})
      ]
    }
  }
};

const verificaLogin = async (req, res) => {
  
  try {
    const errors = validationResult(req);
    const { email, senha } = req.body

    if(errors.isEmpty()){
      const user = await tabUsers.findOne({where: {email: email}})
      if(user) {
        const verificaSenha = await bcrypt.compare(senha, user.senha)
        if(verificaSenha) {
          const token = jwt.sign({userId: user.id , email: user.email}, process.env.JSONWEBTOKEN_SECRET, {expiresIn: '1h'})
          return res.status(200).json({status: 200, message: "Logado com sucesso", token: token})
        }else{
          return res.status(401).json({status: 401, message: "Email ou senha incorreta"})
        }
      }else {
        return res.status(401).json({status: 401, message: "Email ou Senha Incorreta"})
      }
    } else {
      return res.status(401).json({status: 401, message: errors.array()})
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: "Erro interno no servidor"})
  }


  // const errors = validationResult(req);
  // const { email, password } = req.body;
  // console.log(email, password)
  // if (!errors.isEmpty()) {
  //   return res.status(400).json({ errors: errors.array() });
  // }
  // const user = await tabUsers.findOne({
  //   where: {
  //     email: email
  //   }
  // })
  // if (!user) {
  //   return res.status(401).json({message: "E-mail ou senha não existem"})
  // }
  // const senhaValida = await tabUsers.findAll({
  //   where: {
  //     senha: password
  //   }
  // })
  // if(!senhaValida){
  //   return res.status(401).json({message: "E-mail ou senha não existem"})
  // }
  // return res.status(200).json({
  //   // result: user,
  //   token: token,
  //   datauser: user
  // });
  
};


module.exports = {
  verificaLogin,
  // register,
  validateLogin,
};
