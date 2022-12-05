
const {Airport_List,User,Booking,Ticket, Schedule} =require("../models");

const root = (req, res) => {
    res.status(200).json({
        data: "Berhasil Terhubung"
    })
}

function showUsers(req,res){
    User.findAll().then(user=>{
        res.status(200).json({
            data : user
        })
    }).catch(err=>{
        res.status(500).json(err)
    })
}

function SearchTicket(req,res){

}

function BookingTicket(req,res){
    Booking.create({
        User_id: req.body.User_id,
        Total_Passenger: req.body.Total_Passenger,
        Plane_Class: req.body.Plane_Class,
        Origin_Airport: req.body.Origin_Airport,
        Destination_Airport: req.body.Destination_Airport,
        Ticket_Date: req.body.Ticket_Date,
        Price_id: req.body.Price_id,
        Passenger_Type: req.body.Passenger_Type
    }).then(result=>{
        res.status(200).json({data:result})
    }).catch(err=>{
        res.status(500).json({error: err})
    })
}

function AddPriceList(req,res){
    Schedule.create({
        Plane_Class: req.body.Plane_Class,
        Origin_Airport: req.body.Origin_Airport,
        Destination_Airport: req.body.Destination_Airport,
        Airline_id: req.body.Airline_id,
        Price: req.body.Price,
        flight_Date: req.body.flight_Date,
        Departure_Hour: req.body.Departure_Hour,
        Arrival_Hour: req.body.Arrival_Hour
    }).then(result=>{
        res.status(200).json({
            data: result
        })
    }).catch(err=>{
        res.status(500).json({error:err})
    })
}

function ShowPriceList(req,res){
    Price_List.findAll().then(price=>{
        res.status(200).json({
            data : price
        })
    }).catch(err=>{
        res.status(500).json(err)
    })
}

module.exports={
    root,
    showUsers,
    SearchTicket,
    BookingTicket,
    AddPriceList,
    ShowPriceList
}