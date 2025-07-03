'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Compras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      codigo: {
        type:Sequelize.INTEGER
      },
      data: {
        type: Sequelize.DATE
      },
      cpfComprador: {
        type: Sequelize.STRING
      },
      valorTotal: {
        type: Sequelize.FLOAT
      },
      formaPagamentoId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'FormaPagamento',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Compras');
  }
};
