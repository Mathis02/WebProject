'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Decors', {
      EventId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'my_Events',
          key: 'id'
        }
      },
      PictureId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Pictures',
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
    return queryInterface.dropTable('Decors');
  }
};