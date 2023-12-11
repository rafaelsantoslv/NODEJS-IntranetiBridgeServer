"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tabEmpresas extends Model {
    static associate(models) {
      // define association here
    }
  }
  tabEmpresas.init(
    {
      razaoSocial: DataTypes.STRING,
      nomeFantasia: DataTypes.STRING,
      cnpj: DataTypes.INTEGER,
      emailPrincipal: DataTypes.STRING,
      prefixo: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "tabEmpresas",
    },
  );
  return tabEmpresas;
};
