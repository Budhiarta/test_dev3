'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // Insert
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    return queryInterface.bulkInsert('Users', [{
      Name: 'admin',
      Encrypted_Password: "admin",
      Role : 1,
      Birth_Date: "24-11-2022",
      Address: "Jalan Timbul Tenggelam",
      Phone_Number: "081234567890",
      Email: "admin@tripie.com",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  // Delete
  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
