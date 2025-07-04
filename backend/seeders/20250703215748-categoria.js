'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categorias', [
      {
        codigo: 1,
        nome: 'Padaria',
        categoriaPaiId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: 2,
        nome: 'Fruteira',
        categoriaPaiId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categorias', null, {});
  }
};
