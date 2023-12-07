'use strict';
const {Model, DataTypes} = require('sequelize');
const connection = require("../database/index")
// const tabUsers = require('./tabusers');

  class tabRamais extends Model {
    static associate(models) {
    }
  }
  tabRamais.init({
    ramal: DataTypes.STRING,
    status: DataTypes.STRING,
    registro: DataTypes.STRING,
    senha: DataTypes.STRING,
    nomeOperador: DataTypes.STRING,
    anydesk: DataTypes.STRING,
    instalacao: DataTypes.STRING,
    empresa: DataTypes.STRING
  },
  {
    sequelize: connection,
    tableName: 'tabRamais',
  });
  // return tabRamais;



module.exports = tabRamais;