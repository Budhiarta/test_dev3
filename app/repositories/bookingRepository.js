const {Booking} = require('../models')

module.exports={
    createBooking(reqArgs){
        return Booking.create(reqArgs)
    },
    findBooking(){
        return Booking.findAll()
    }
}