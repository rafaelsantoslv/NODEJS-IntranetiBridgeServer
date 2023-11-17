"use strict";
const { Model, DataTypes } = require("sequelize");
const connection = require("../database/index");

class tabUsers extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
tabUsers.init(
  {
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING, // Corrigido para STRING
    tipo: DataTypes.ENUM("admin", "suporte", "gerente", "supervisor"),
  },
  {
    sequelize: connection,
    tableName: "tabUsers",
  },
);
// return tabUsers;

module.exports = tabUsers;
