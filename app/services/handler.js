
const {Airport_List,User,Booking,Ticket, Price_List} =require("../models");
const bycript = require('bcryptjs')
const salt =10

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

async function RegisterUser(req,res){
    const Encrypted_Password = await encryptPassword(req.body.password)

    const body = {
        Name: req.body.Name,
        Encrypted_Password: Encrypted_Password,
        Role : 0,
        Email : req.body.Email,
        Foto : "",
        Address: "",
        Phone_Number: ""
    }

    User.create(body).then(user => {
         return res.status(200).json({ 
            data: user,
            status:"Berhasil"
        })
    }).catch(err => {
        res.status(500).json(err)
    })
}

async function Login(req,res){
    const password = req.body.password
    const user = await User.findOne({
        where: { Email : req.body.Email },
      });
  
      if (!user) {
        res.status(404).json({ message: "Email tidak ditemukan" });
        return;
      }
  
      const isPasswordCorrect = await checkPassword(
        user.Encrypted_Password,
        password
      );
  
      if (!isPasswordCorrect) {
        res.status(401).json({ message: "Password salah!" });
        return;
      }
      res.status(201).json({
        data : user
      })
  

}

function encryptPassword(password){
    return new Promise((resolve, reject)=>{
        bycript.hash(password,salt, (err, encryptPassword)=>{
            if(!!err){
                reject(err)
                return
            }
            resolve(encryptPassword);
        })
    })
}

function checkPassword(encryptPassword,password){
    return new Promise((resolve, reject)=>{
        bycript.compare(
            password,encryptPassword, (err, isPasswordCorrect)=>{
                if(!!err){
                    reject(err)
                    return
                }
                
                resolve(isPasswordCorrect)
            }
        )
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
    root,
    showUsers,
    RegisterUser,
    Login,
    SearchTicket,
    BookingTicket,
    AddPriceList,
    ShowPriceList
}