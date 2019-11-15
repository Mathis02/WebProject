'use strict';
module.exports = (sequelize, DataTypes) => {
  const my_User = sequelize.define('my_User', {
    name_user: DataTypes.STRING,
    firstname_user: DataTypes.STRING,
    mail_user: DataTypes.STRING,
    password_user: DataTypes.STRING,
    connection_status_user: DataTypes.BOOLEAN
  }, {});
  my_User.associate = function(models) {
    // associations can be defined here
    models.my_User.hasMany(models.my_Order);
    models.my_User.hasMany(models.my_Event);
    models.my_User.hasMany(models.my_Join);
    models.my_User.hasMany(models.Picture);
    models.my_User.hasMany(models.Comments);

    models.my_User.belongsTo(models.Profile);
    models.my_User.belongsTo(models.Center);
  };
  return my_User;
};