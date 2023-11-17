const { body, validationResult } = require("express-validator");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const { password } = require("../config/database");

const validateLogin = (method) => {
  switch (method) {
    case "verificaUser": {
      return [
        body("email", "email invalido").isEmail().exists(),
        body("password", "senha Invalida").isLength({ min: 4, max: 18 }),
      ];
    }
    case "verificaRegistro": {
      return [
        body("email", "email invalido").isEmail().exists(),
        body("password", "Senha invalida").isLength({min: 8, mas: 18})
      ]
    }
  }
};

const verificaLogin = async (req, res) => {
  const errors = validationResult(req);
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10)
  // console.log(hashedPassword, resultPassword);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } else if (email === "rafael@gmail.com" && password === "1234") {
    const token = jwt.sign({userId: 1234, email: 'rafael@gmail.com'}, process.env.JSONWEBTOKEN_SECRET, {expiresIn: '1h'})
    return res.json({
      // result: user,
      token: token
    });
  }
};

const register = async (req, res) => {
  const errors = validationResult(req);
  const {email, password} = req.body
  const resultPassword = await bcrypt.compare(password, //consultadoBanco)
};

module.exports = {
  verificaLogin,
  // register,
  validateLogin,
};
