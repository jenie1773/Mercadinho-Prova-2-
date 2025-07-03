const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(
    'mercadinho', 
    'root', 
    '', {
  host: 'localhost',
  dialect: 'mysql' // ou 'postgres', 'sqlite', etc.
});

module.exports = sequelize;
