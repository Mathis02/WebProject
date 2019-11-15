'use strict';
module.exports = (sequelize, DataTypes) => {
  const my_Join = sequelize.define('my_Join', {

  }, {});
  my_Join.associate = function(models) {
    // associations can be defined here
    models.my_Join.belongsTo(models.my_Event);
    models.my_Join.belongsTo(models.my_User)
  };
  return my_Join;
};