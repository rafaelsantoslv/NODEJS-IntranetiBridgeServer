const { body, validationResult } = require("express-validator");
const jwt = require('jsonwebtoken')

const validateLogin = (method) => {
  switch (method) {
    case "verificaUser": {
      return [
        body("email", "email invalido").isEmail().exists(),
        body("password", "senha Invalida").isLength({ min: 4, max: 18 }),
      ];
    }
  }
};

const verificaLogin = async (req, res) => {
  const errors = validationResult(req);
  const user = ({ email, password } = req.body);
  console.log(user);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } else if (user.email === "rafael@gmail.com" && user.password === "1234") {
    const token = jwt.sign({userId: 1234, email: 'rafael@gmail.com'}, process.env.JSONWEBTOKEN_SECRET, {expiresIn: '1h'})
    return res.json({
      result: user,
      token: token
    });
  }
};

const register = async (req, res) => {};

module.exports = {
  verificaLogin,
  register,
  validateLogin,
};
