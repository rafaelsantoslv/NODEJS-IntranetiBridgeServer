const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

require("express-validator");
require("./database/index");
require("./lib/moduleAliases");
require("dotenv/config");

const app = express();
const routes = require("@routes/routes");

app.use(bodyParser.json());
app.use(routes);
app.use(express.static(path.join(__dirname, "app", "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "app", "views"));

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
