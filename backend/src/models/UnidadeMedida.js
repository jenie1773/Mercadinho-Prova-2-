module.exports = (sequelize, DataTypes) => {
    const UnidadeMedida = sequelize.define("UnidadeMedida", {
      nome: DataTypes.STRING,
      quantidade: DataTypes.INTEGER,
      preco: DataTypes.FLOAT,
    });
  
    return UnidadeMedida;
};
  