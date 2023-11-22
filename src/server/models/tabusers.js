"use strict";
const { Model, DataTypes } = require("sequelize");
const connection = require("../database/index");

class tabUsers extends Model {
  static associate(models) {}
}
tabUsers.init(
  {
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING, // Corrigido para STRING
    tipo: DataTypes.ENUM("admin", "suporte", "gerente", "supervisor"),
    empresa: DataTypes.STRING
  },
  {
    sequelize: connection,
    tableName: "tabUsers",
  },
);
// return tabUsers;

module.exports = tabUsers;
