
const {Airport_List,User,Booking,Ticket,Airlines, Price_List} =require("../models");

function showUsers(req,res){
    User.findAll().then(user=>{
        res.status(200).json({
            data : user
        })
    }).catch(err=>{
        res.status(500).json(err)
    })
}

function RegisterUser(req,res){
    const body = {
        Name: req.body.Name,
        Encrypted_Password: req.body.Encrypted_Password,
        Role : 0,
        Birth_Date: req.body.Birth_Date,
        Email : req.body.Email,
        Address: req.body.Address,
        Phone_Number: req.body.Phone_Number,
    }

    User.create(body).then(user => {
        res.status(200).json({ data: user })
        res.send("Login Berhasil!")
    }).catch(err => {
        res.status(500).json(err)
    })
}

function Login(req,res){

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
    Price_List.create({
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
    showUsers,RegisterUser, Login,SearchTicket,BookingTicket,AddPriceList,ShowPriceList
}