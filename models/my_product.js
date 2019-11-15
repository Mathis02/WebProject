'use strict';
module.exports = (sequelize, DataTypes) => {
  const my_Product = sequelize.define('my_Product', {
    name_product: DataTypes.STRING,
    price_product: DataTypes.INTEGER,
    stock_product: DataTypes.INTEGER,
    description_product: DataTypes.STRING,
    sold_product: DataTypes.INTEGER
  }, {});
  my_Product.associate = function(models) {
    // associations can be defined here
    models.my_Product.hasMany(models.Expose);
    models.my_Product.hasMany(models.Contains);

    models.my_Product.belongsTo(models.Category)
  };
  return my_Product;
};