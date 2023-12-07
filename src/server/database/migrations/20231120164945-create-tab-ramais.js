  'use strict';
  /** @type {import('sequelize-cli').Migration} */
  module.exports = {
  async up(queryInterface, Sequelize) {
  await queryInterface.createTable('tabRamais', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  ramal: {
    type: Sequelize.STRING,
    unique: true
  },
  status: {
    allowNull: false,
    type: Sequelize.ENUM("ativo", "inativo"),
    defaultValue: "ativo",
  },
  registro: {
    allowNull: false,
    type: Sequelize.ENUM("Registrado", "Não registrado", "False")
  },
  senha: {
    type: Sequelize.STRING
  },
  nomeOperador: {
    type: Sequelize.STRING
  },
  anydesk: {
    type: Sequelize.STRING
  },
  instalacao: {
    type: Sequelize.STRING
  },
  empresa: {
    type: Sequelize.STRING
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
  });
  },
  async down(queryInterface, Sequelize) {
  await queryInterface.dropTable('tabRamais');
  }
  };