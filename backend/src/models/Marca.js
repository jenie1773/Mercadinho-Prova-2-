module.exports = (sequelize, DataTypes) => {
    const Marca = sequelize.define("Marca", {
      nome: DataTypes.STRING,
      codigo: DataTypes.INTEGER,
    });
  
    return Marca;
};
  