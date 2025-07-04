'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('UnidadeMedida', [
      {
        codigo: 1,
        nome: 'Unidade',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: 2,
        nome: 'Litro',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: 3,
        nome: 'Quilograma',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UnidadeMedida', null, {});
  }
};
