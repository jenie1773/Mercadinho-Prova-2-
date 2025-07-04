'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('FormaPagamento', [
      {
        codigo: 1,
        nome: 'Dinheiro',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: 2,
        nome: 'Cartão de Crédito',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: 3,
        nome: 'Cartão de Débito',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: 4,
        nome: 'Pix',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('FormaPagamento', null, {});
  }
};
