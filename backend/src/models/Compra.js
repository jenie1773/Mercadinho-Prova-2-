module.exports = (sequelize, DataTypes) => {

  const Compra = sequelize.define("Compra", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    codigo: {
      type: DataTypes.INTEGER
    },
    data: {
      type: DataTypes.DATE
    },
    cpfComprador: {
      type: DataTypes.STRING
    },
    valorTotal: {
      type: DataTypes.FLOAT
    },
    formaPagamentoId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'FormaPagamento',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    }
  }, {
    tableName: 'Compras',
    timestamps: true
  });
}

