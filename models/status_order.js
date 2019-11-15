'use strict';
module.exports = (sequelize, DataTypes) => {
  const Status_Order = sequelize.define('Status_Order', {
    status_order: DataTypes.STRING
  }, {});
  Status_Order.associate = function(models) {
    // associations can be defined here
    models.Status_Order.hasMany(models.my_Order);
  };
  return Status_Order;
};