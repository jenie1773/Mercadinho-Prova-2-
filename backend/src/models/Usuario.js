module.exports = (sequelize, DataTypes) => {

  const Usuario = sequelize.define("Usuario", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nome: {
        type: DataTypes.STRING
    },
    nickname: {
      type: DataTypes.STRING
    },
    senha: {
        type: DataTypes.STRING
    },
  }, {
    tableName: 'Usuarios',
    timestamps: true
  });
}