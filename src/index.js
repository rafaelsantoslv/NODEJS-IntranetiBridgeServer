const express = require("express");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const connection = require("./app/database/index");
require("dotenv/config");
const app = express();
const routes = require("./routes");
app.use(bodyParser.json());
// app.use(expressValidator())
app.use(routes);

try {
  app.listen(process.env.SERVER_PORT || 6161);
  console.log(
    `[SERVER] ${process.env.SERVER_NAME} ONLINE NA PORTA ${process.env.SERVER_PORT}`,
  );
} catch (error) {
  console.log(
    `[SERVER] ${process.env.SERVER_NAME} OFFLINE NA PORTA ${process.env.SERVER_PORT}`,
  );
}
