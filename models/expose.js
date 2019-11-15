'use strict';
module.exports = (sequelize, DataTypes) => {
  const Expose = sequelize.define('Expose', {

  }, {});
  Expose.associate = function(models) {
    // associations can be defined here
    models.Expose.belongsTo(models.my_Product);
    models.Expose.belongsTo(models.Picture)
  };
  return Expose;
};