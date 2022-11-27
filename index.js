const express = require("express");
const { showUsers, RegisterUser, Login, SearchTicket, BookingTicket, AddPriceList, ShowPriceList } = require("./handler/handler");
const app = express();
const port = 2002;

app.use(express.json());

//Umum access
app.get('/user',showUsers)
app.post('/register',RegisterUser)
app.post('/login',Login) 

//yang bisa diakses user//
app.get('/Search-ticket', SearchTicket ),
app.post('/Booking-Ticket', BookingTicket),
app.post('/Ticket')
app.get('/Ticket')
app.get('/History')

//yang bisa diakses Admin//
app.get('/Price-List',ShowPriceList)
app.post('/Add-Price',AddPriceList)

app.listen(port, () => {
    console.log('Server Side running at port', port)
})