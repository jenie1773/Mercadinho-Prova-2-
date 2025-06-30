module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define("Produto", {
      nome: DataTypes.STRING,
      quantidade: DataTypes.INTEGER,
      preco: DataTypes.FLOAT,
    });
  
    return Produto;
};
  