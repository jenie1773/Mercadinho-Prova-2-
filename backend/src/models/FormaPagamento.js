module.exports = (sequelize, DataTypes) => {

const FormaPagamento = db.define('FormaPagamento', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },    
  codigo: {
      type: DataTypes.INTEGER,
  },
  nome: {
    type: DataTypes.STRING,
  }
}, {
  tableName: 'FormaPagamento',
  timestamps: true
});
  
}