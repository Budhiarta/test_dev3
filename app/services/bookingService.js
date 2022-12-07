const bookingRepository = require("../repositories/bookingRepository")

module.exports={
    CreateBooking(reqArgs){
        return bookingRepository.createBooking(reqArgs)
    }
}