'use strict';
module.exports = (sequelize, DataTypes) => {
  const my_Order = sequelize.define('my_Order', {
    date_order: DataTypes.DATE,
    price_order: DataTypes.INTEGER
  }, {});
  my_Order.associate = function(models) {
    // associations can be defined here
    models.my_Order.hasMany(models.Contains);

    models.my_Order.belongsTo(models.my_User);
    models.my_Order.belongsTo(models.Status_Order)
  };
  return my_Order;
};