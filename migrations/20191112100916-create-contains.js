'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Contains', {
      ProductId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'my_Products',
          key: 'id'
        }
      },
      OrderId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'my_Orders',
          key: 'id'
        }
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Contains');
  }
};