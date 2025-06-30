'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Produtos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      codigo: {
        type:Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      marcaId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Marcas',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      imagem: {
        type: Sequelize.STRING
      },
      preco: {
        type: Sequelize.FLOAT
      },
      categoriaId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Categorias',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      unidadeMedidaId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'UnidadeMedida',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      pesoEmbalagem: {
        type: Sequelize.INTEGER
      },
      dataValidade: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Produtos');
  }
};
