'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tabRamais extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tabRamais.init({
    ramal: DataTypes.INTEGER,
    status: DataTypes.STRING,
    senha: DataTypes.STRING,
    nomeOperador: DataTypes.STRING,
    anydesk: DataTypes.STRING,
    instalacao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tabRamais',
  });
  return tabRamais;
};