const ticketService = require("../../../services/ticketService")

module.exports={
    async CreateTicket(req,res){
        try{
            const ticket = await ticketService.createTicket(req.body)
            return res.send(200).json({
                Passanger_Name: ticket.Passanger_Name,
                Booking_id: ticket.Booking_id,
                Origin_Airport: ticket.Origin_Airport,
                Destination_Airport: ticketl.Destination_Airport,
                Plane_class: ticket.Plane_class,
                flight_Hours: ticket.flight_Hours,
                Airline_Name: ticket.Airline_name
            })
        }catch(err){
            res.status(401).json({
                message: err.message
            })
        }
    },
    async DisplayTicket(req,res){
        try{
            await ticketService.FindAllTicket()
            .then((data)=>{
                res.status(201).json({
                    data:data
                })
            })
        }catch(err){
            throw err
        }
    },
    async deleteTicket(req,res){
        try{
            await ticketService.DeleteTicket(req.params.id)
            .then((data)=>{
                res.status(200).json({
                    status: "Delete Data Berhasil"
                });
            })

        }catch(err){
            res.status(403).json({
                message : err.message
            })
        }
    },
}