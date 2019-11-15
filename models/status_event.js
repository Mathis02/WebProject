'use strict';
module.exports = (sequelize, DataTypes) => {
  const Status_Event = sequelize.define('Status_Event', {
    status_event: DataTypes.STRING
  }, {});
  Status_Event.associate = function(models) {
    // associations can be defined here
    models.Status_Event.hasMany(models.my_Event);
  };
  return Status_Event;
};