'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pessoas', [
      {
        nome: 'Sophia Santos',
        ativo: true,
        email: 'sophia@gmail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Eduardo Santos',
        ativo: true,
        email: 'eduardo@gmail.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Wilson Paiva',
        ativo: true,
        email: 'wilson@gmail.com',
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: 'Andreza Pessoa',
        ativo: true,
        email: 'andreza@gmail.com',
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pessoas', null, {});
  }
};
