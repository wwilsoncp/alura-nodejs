'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Matriculas', [{
      status: 'confirmado',
      estudante_id: 5,
      turma_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      status: 'confirmado',
      estudante_id: 6,
      turma_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      status: 'cancelado',
      estudante_id: 5,
      turma_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      status: 'cancelado',
      estudante_id: 6,
      turma_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Matriculas', null, {});

  }
};
