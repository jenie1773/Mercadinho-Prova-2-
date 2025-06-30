const { DataTypes } = require('sequelize');
const db = require('../db');

const UnidadeMedida = db.define('UnidadeMedida', {
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
  tableName: 'UnidadeMedida',
  timestamps: true
});

module.exports = UnidadeMedida;