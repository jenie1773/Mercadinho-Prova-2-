module.exports = (sequelize, DataTypes) => {

const UnidadeMedida = sequelize.define('UnidadeMedida', {
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
    return UnidadeMedida
}