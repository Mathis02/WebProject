'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('my_Joins', {
      EventId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'my_Events',
          key: 'id'
        }
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'my_Users',
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
    return queryInterface.dropTable('my_Joins');
  }
};