'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('my_Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name_product: {
        allowNull: false,
        type: Sequelize.STRING
      },
      price_product: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      stock_product: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      description_product: {
        allowNull: false,
        type: Sequelize.STRING
      },
      sold_product: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      CategoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('my_Products');
  }
};