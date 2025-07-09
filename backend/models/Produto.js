const { DataTypes } = require('sequelize');
const db = require('../db');

const Produto = db.define('Produto', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  codigo: {
    type: DataTypes.INTEGER
  },
  nome: {
    type: DataTypes.STRING
  },
  marcaId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Marcas',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  imagem: {
    type: DataTypes.BLOB('long'),
    allowNull: true,
  },
  preco: {
    type: DataTypes.FLOAT
  },
  categoriaId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Categorias',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  unidadeMedidaId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'UnidadeMedida',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  pesoEmbalagem: {
    type: DataTypes.INTEGER
  },
  dataValidade: {
    type: DataTypes.DATE
  }
}, {
  tableName: 'Produtos',
  timestamps: true
});

module.exports = Produto;
