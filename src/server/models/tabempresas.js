"use strict";
const { Model, DataTypes } = require("sequelize");
const connection = require("../database/index");

class tabEmpresas extends Model {
  static associate(models) {}
}
tabEmpresas.init(
  {
    razaoSocial: DataTypes.STRING,
    nomeFantasia: DataTypes.STRING,
    cnpj: DataTypes.INTEGER,
    emailPrincipal: DataTypes.STRING,
    servico: DataTypes.STRING,
    prefixo: DataTypes.INTEGER,
  },
  {
    sequelize: connection,
    tableName: "tabempresas",
  },
);

module.exports = tabEmpresas;
