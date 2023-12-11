const middlewareErrorHandler = (erro, req, res, next) => {
  console.error(erro);

  let status = 500;
  let message = "Erro interno do servidor";
  let errorDetails = erro.message;

  if (erro.status) {
    status: erro.status;
    message = erro.message;
    errorDetails = erro.details || err.message;
  }

  res.status(status).json({ status, message, error: errorDetails });
};

module.exports = middlewareErrorHandler;
