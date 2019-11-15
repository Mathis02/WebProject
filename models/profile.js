'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    name_profile: DataTypes.STRING
  }, {});
  Profile.associate = function(models) {
    // associations can be defined here
    models.Profile.hasMany(models.my_User);
  };
  return Profile;
};