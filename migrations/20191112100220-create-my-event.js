'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('my_Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name_event: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description_event: {
        allowNull: false,
        type: Sequelize.STRING
      },
      date_event: {
        allowNull: false,
        type: Sequelize.DATE
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'my_Users',
          key: 'id'
        }
      },
      Status_EventId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Status_Events',
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
    return queryInterface.dropTable('my_Events');
  }
};