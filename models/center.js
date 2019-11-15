'use strict';
module.exports = (sequelize, DataTypes) => {
  const Center = sequelize.define('Center', {
    name_center: DataTypes.STRING
  }, {});
  Center.associate = function(models) {
    // associations can be defined here
    models.Center.hasMany(models.my_User);
  };
  return Center;
};