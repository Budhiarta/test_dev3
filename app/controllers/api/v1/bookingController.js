const bookingService = require("../../../services/bookingService")
const ticketService = require("../../../services/ticketService")

module.exports = {
    async addBooking(req,res){
        try{
            const booking = await bookingService.CreateBooking(req.body)
            res.status(200).json({
                user_id: booking.user_id,
                Total_Passenger: booking.Total_Passenger,
                Plane_Class: booking.Plane_Class,
                Origin_Airport: booking.Origin_Airport,
                Destination_Airport: booking.Destination_Airport,
                Ticket_Date: booking.Ticket_Date,
                schedule_id: booking.schedule_id
            })
        }catch(err){
            res.status(400).json({
                error: err
            })
        }
    },
    async DisplayBooking(req,res){
        try{
            await bookingService.showBooking()
            .then((data)=>{
                res.status(201).json({
                    data: data
                })
            })
        }catch(err){
            throw err
        }
    },

}