'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('my_Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name_user: {
        allowNull: false,
        type: Sequelize.STRING
      },
      firstname_user: {
        allowNull: false,
        type: Sequelize.STRING
      },
      mail_user: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password_user: {
        allowNull: false,
        type: Sequelize.STRING
      },
      connection_status_user: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      ProfileId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Profiles',
          key: 'id'
        }
      },
      CenterId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Centers',
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
    return queryInterface.dropTable('my_Users');
  }
};