module.exports = (sequelize, DataTypes) => {
  const Categoria = sequelize.define("Categoria", {
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
    categoriaPaiId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Categorias',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    }
  }, {
    tableName: 'Categorias',
    timestamps: true
  });

  return Categoria;
}
