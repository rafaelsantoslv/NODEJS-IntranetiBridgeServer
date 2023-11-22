'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tabFuncionarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      secondname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      datanasc: {
        type: Sequelize.DATE
      },
      nationality: {
        type: Sequelize.STRING
      },
      education: {
        type: Sequelize.STRING
      },
      localnasc: {
        type: Sequelize.STRING
      },
      statenasc: {
        type: Sequelize.STRING
      },
      numcell: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      numaddress: {
        type: Sequelize.INTEGER
      },
      complemento: {
        type: Sequelize.STRING
      },
      neighborhood: {
        type: Sequelize.STRING
      },
      county: {
        type: Sequelize.STRING
      },
      cep: {
        type: Sequelize.INTEGER
      },
      state: {
        type: Sequelize.STRING
      },
      rg: {
        type: Sequelize.INTEGER
      },
      datacadastrorg: {
        type: Sequelize.DATE
      },
      cpf: {
        type: Sequelize.BIGINT
      },
      rgemissor: {
        type: Sequelize.STRING
      },
      tituloeleitoral: {
        type: Sequelize.BIGINT
      },
      zone: {
        type: Sequelize.INTEGER
      },
      section: {
        type: Sequelize.INTEGER
      },
      namepai: {
        type: Sequelize.STRING
      },
      namemae: {
        type: Sequelize.STRING
      },
      carteiratrab: {
        type: Sequelize.INTEGER
      },
      seriecarteiratrab: {
        type: Sequelize.INTEGER
      },
      pis: {
        type: Sequelize.INTEGER
      },
      datacadastroctps: {
        type: Sequelize.DATE
      },
      funcao: {
        type: Sequelize.STRING
      },
      cargahoraria: {
        type: Sequelize.INTEGER
      },
      dataadmissao: {
        type: Sequelize.DATE
      },
      salario: {
        type: Sequelize.DECIMAL
      },
      gender: {
        type: Sequelize.STRING
      },
      maritalStatus: {
        type: Sequelize.STRING
      },
      hasDisability: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('tabFuncionarios');
  }
};