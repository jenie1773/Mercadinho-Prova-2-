module.exports = (sequelize, DataTypes) => {
    const FormaPagamento = sequelize.define("FormaPagamento", {
      codigo: DataTypes.INTEGER,
      nome: DataTypes.STRING,
    });
  
    return FormaPagamento;
};
  