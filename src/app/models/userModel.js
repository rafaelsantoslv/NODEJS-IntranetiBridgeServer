const { Model, DataTypes } = require("sequelize");
const connection = require("../database/index");
const crypto = require("crypto");
// PRECISA MODIFICAR O NOME DOS CAMPOS DE ACORDO COM A TABELA USUARIOS

class usuarios extends Model {}

usuarios.init(
  {
    usuario: DataTypes.STRING(80),
    name: DataTypes.STRING(80),
    senha: DataTypes.STRING(80),
    type: DataTypes.ENUM("Administrador", "Supervisor", "Operador"),
  },
  {
    sequelize: connection,
    tableName: "tabusuarios",
  },
);

module.exports = usuarios;
