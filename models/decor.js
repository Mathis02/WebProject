'use strict';
module.exports = (sequelize, DataTypes) => {
  const Decor = sequelize.define('Decor', {

  }, {});
  Decor.associate = function(models) {
    // associations can be defined here
    models.Decor.belongsTo(models.my_Event);
    models.Decor.belongsTo(models.Picture)
  };
  return Decor;
};