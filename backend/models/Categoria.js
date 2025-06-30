module.exports = (sequelize, DataTypes) => {
  const Categoria = sequelize.define("Categoria", {
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
      onDelete: 'SET NULL' // ou 'CASCADE', dependendo do comportamento desejado
    }
  }, {
    tableName: 'Categorias',
    timestamps: true // Garante que `createdAt` e `updatedAt` sejam considerados
  });

  return Categoria;
};
