const jwt = require("jsonwebtoken");

const verificaToken = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({
      status: 401,
      msg: "Token não fornecido. Acesso não autorizado!",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JSONWEBTOKEN_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res
      .status(401)
      .json({ status: 401, message: "Token inválido. Acesso não autorizado!" });
  }
};

module.exports = {
  verificaToken,
};
