module.exports = (sequelize, DataTypes) => {
    const Estoque = sequelize.define("Estoque", {
      nome: DataTypes.STRING,
      quantidade: DataTypes.INTEGER,
      preco: DataTypes.FLOAT,
    });
  
    return Estoque;
};
  