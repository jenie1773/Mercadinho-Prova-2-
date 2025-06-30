module.exports = (sequelize, DataTypes) => {
    const Estoque = sequelize.define("Estoque", {
      nome: DataTypes.STRING,
      codigo: DataTypes.INTEGER,
    });
  
    return Estoque;
};
  