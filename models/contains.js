'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contains = sequelize.define('Contains', {
    quantity: DataTypes.INTEGER
  }, {});
  Contains.associate = function(models) {
    // associations can be defined here
    models.Contains.belongsTo(models.my_Order);
    models.Contains.belongsTo(models.my_Product)
  };
  return Contains;
};