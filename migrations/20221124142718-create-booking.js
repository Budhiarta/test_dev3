'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      User_id: {
        type: Sequelize.INTEGER
      },
      Total_Passenger: {
        type: Sequelize.INTEGER
      },
      Plane_Class: {
        type: Sequelize.STRING
      },
      Origin_Airport: {
        type: Sequelize.STRING
      },
      Destination_Airport: {
        type: Sequelize.STRING
      },
      Ticket_Date: {
        type: Sequelize.DATE
      },
      Price_id: {
        type: Sequelize.INTEGER
      },
      Passenger_Type: {
        type: Sequelize.STRING
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bookings');
  }
};