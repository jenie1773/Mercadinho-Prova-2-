const { DataTypes } = require('sequelize');
const db = require('../db');

const Marca = db.define('Marca', {
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
}, {
  tableName: 'Marcas',
  timestamps: true
});

module.exports = Marca;