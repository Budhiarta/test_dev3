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

    return queryInterface.bulkInsert('Airport_List', [{
      Airline_Code:'GA',
      Company_Name:'Garuda Indonesia',
      Flight_Rute:'Domestic',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      Airline_Code:'JT',
      Company_Name:'Lion Mentari Airlines',
      Flight_Rute:'Domestic',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
        Airline_Code:'SJ',
        Company_Name:'Sriwijaya Air',
        Flight_Rute:'Domestic',
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        Airline_Code:'QG',
        Company_Name:'Citilink Indonesia',
        Flight_Rute:'Domestic',
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        Airline_Code:'7P',
        Company_Name:'Metro Batavia',
        Flight_Rute:'Domestic',
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        Airline_Code:'QZ',
        Company_Name:'Indonesia AirAsia',
        Flight_Rute:'Domestic',
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        Airline_Code:'RI',
        Company_Name:'Mandala Airlines',
        Flight_Rute:'Domestic',
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        Airline_Code:'KLS',
        Company_Name:'Kal Star Aviation',
        Flight_Rute:'Domestic',
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        Airline_Code:'TGN',
        Company_Name:'Trigana Air Service',
        Flight_Rute:'Domestic',
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        Airline_Code:'IDX',
        Company_Name:'Indonesa Air Aisa X',
        Flight_Rute:'Domestic',
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
