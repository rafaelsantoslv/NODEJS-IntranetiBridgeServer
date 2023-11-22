'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tabFuncionarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tabFuncionarios.init({
    firstname: DataTypes.STRING,
    secondname: DataTypes.STRING,
    datanasc: DataTypes.DATE,
    nationality: DataTypes.STRING,
    education: DataTypes.STRING,
    localnasc: DataTypes.STRING,
    statenasc: DataTypes.STRING,
    numcell: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    numaddress: DataTypes.INTEGER,
    complemento: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    county: DataTypes.STRING,
    cep: DataTypes.INTEGER,
    state: DataTypes.STRING,
    rg: DataTypes.INTEGER,
    datacadastrorg: DataTypes.DATE,
    cpf: DataTypes.BIGINT,
    rgemissor: DataTypes.STRING,
    tituloeleitoral: DataTypes.BIGINT,
    zone: DataTypes.INTEGER,
    section: DataTypes.INTEGER,
    namepai: DataTypes.STRING,
    namemae: DataTypes.STRING,
    carteiratrab: DataTypes.INTEGER,
    seriecarteiratrab: DataTypes.INTEGER,
    pis: DataTypes.INTEGER,
    datacadastroctps: DataTypes.DATE,
    funcao: DataTypes.STRING,
    cargahoraria: DataTypes.INTEGER,
    dataadmissao: DataTypes.DATE,
    salario: DataTypes.DECIMAL,
    gender: DataTypes.STRING,
    maritalStatus: DataTypes.STRING,
    hasDisability: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'tabFuncionarios',
  });
  return tabFuncionarios;
};