'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      category: {
        type: Sequelize.INTEGER
      },
      subcategory: {
        type: Sequelize.INTEGER
      },
      phone: {
        type: Sequelize.STRING
      },
      customer_reported: {
        type: Sequelize.STRING
      },
      assignment: {
        type: Sequelize.INTEGER
      },
      notes: {
        type: Sequelize.STRING
      },
      frequency: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      latitude: {
        type: Sequelize.FLOAT
      },
      longitude: {
        type: Sequelize.FLOAT
      },
      creationDate: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('reports');
  }
};