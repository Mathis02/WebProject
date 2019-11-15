'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define('Comments', {
    date_comments: DataTypes.DATE,
    time_comments: DataTypes.TIME,
    text_comments: DataTypes.STRING
  }, {});
  Comments.associate = function(models) {
    // associations can be defined here
    models.Comments.belongsTo(models.my_User);
    models.Comments.belongsTo(models.Picture)
  };
  return Comments;
};