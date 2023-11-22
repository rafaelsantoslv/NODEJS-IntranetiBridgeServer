'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tabEmpresas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      razaoSocial: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      nomeFantasia: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      cnpj: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      emailPrincipal: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      servico: {
        allowNull: false,
        type: Sequelize.ENUM("pabx", "crm"),
      },  
      prefixo: {
        allowNull: false,
        type: Sequelize.INTEGER(6)
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
    await queryInterface.dropTable('tabEmpresas');
  }
};