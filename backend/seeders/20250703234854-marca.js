'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Marcas', [
      {
        codigo: 1,
        nome: 'Nestlé',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: 2,
        nome: 'Coca-Cola',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: 3,
        nome: 'Ypê',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigo: 4,
        nome: 'Sadia',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Marcas', null, {});
  }
};
