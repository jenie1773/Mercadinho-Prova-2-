'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    const senhaHash = await bcrypt.hash('123456', 10);

    return queryInterface.bulkInsert('Usuarios', [{
      codigo: 1,
      nome: 'Admin',
      email: 'admin@email.com',
      senha: senhaHash,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Usuarios', { email: 'admin@email.com' }, {});
  }
};
