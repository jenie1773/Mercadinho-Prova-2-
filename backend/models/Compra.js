module.exports = (sequelize, DataTypes) => {
  const Compra = sequelize.define("Compra", {
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
        model: 'FormaPagamentos',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    }
  }, {
    tableName: 'Compras',
    timestamps: true
  });

  return Compra;
};
