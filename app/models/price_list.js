'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Price_List extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Booking,{
        foreignKey:'price_id',
        as: 'bookings'
      })
      // define association here
    }
  }
  Price_List.init({
    Origin_Airport: DataTypes.STRING,
    Destination_Airport: DataTypes.STRING,
    Plane_class: DataTypes.STRING,
    Airline_id: DataTypes.INTEGER,
    Price: DataTypes.INTEGER,
    flight_Date: DataTypes.DATE,
    Departure_Hour: DataTypes.TIME,
    Arrival_Hour: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Price_List',
  });
  return Price_List;
};