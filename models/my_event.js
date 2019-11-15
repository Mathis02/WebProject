'use strict';
module.exports = (sequelize, DataTypes) => {
  const my_Event = sequelize.define('my_Event', {
    name_event: DataTypes.STRING,
    description_event: DataTypes.STRING,
    date_event: DataTypes.DATE,
  }, {});
  my_Event.associate = function(models) {
    // associations can be defined here
    models.my_Event.hasMany(models.my_Join);
    models.my_Event.hasMany(models.Decor);

    models.my_Event.belongsTo(models.my_User);
    models.my_Event.belongsTo(models.Status_Event)
  };
  return my_Event;
};