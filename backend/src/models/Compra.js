module.exports = (sequelize, DataTypes) => {
    const Compra = sequelize.define("Compra", {
      codigo: DataTypes.INTEGER,
      data: DataTypes.DATE,
      cpfComprador: DataTypes.STRING,
      valorTotal: DataTypes.FLOAT,
      formaPagamentoId: DataTypes.INTEGER,
    });
  
    return Compra;
};
  