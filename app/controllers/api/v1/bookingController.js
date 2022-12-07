const bookingService = require("../../../services/bookingService")

module.exports = {
    async addBooking(req,res){
        try{
            const booking = await bookingService.CreateBooking(req.body)
            res.status(200).json({
                User_id: booking.User_id,
                Total_Passenger: booking.Total_Passenger,
                Plane_Class: booking.Plane_Class,
                Origin_Airport: booking.Origin_Airport,
                Destination_Airport: booking.Destination_Airport,
                Ticket_Date: booking.Ticket_Date,
                Schedule_id: booking.Schedule_id
            })
        }catch(err){
            res.status(400).json({
                error: err
            })
        }
    }
}