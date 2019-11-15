'use strict';
module.exports = (sequelize, DataTypes) => {
  const Picture = sequelize.define('Picture', {
    root_picture: DataTypes.STRING
  }, {});
  Picture.associate = function(models) {
    // associations can be defined here
    models.Picture.hasMany(models.Comments);
    models.Picture.hasMany(models.Expose);
    models.Picture.hasMany(models.Decor);

    models.Picture.belongsTo(models.my_User)
  };
  return Picture;
};