'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    category_product: DataTypes.STRING
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
    models.Category.hasMany(models.my_Product);
  };
  return Category;
};