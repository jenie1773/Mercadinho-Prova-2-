module.exports = (sequelize, DataTypes) => {

const Estoque = sequelize.define('Estoque', {
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
  tableName: 'Estoques',
  timestamps: true
});

    return Estoque
}