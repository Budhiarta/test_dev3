const express = require("express");
const { showUsers, RegisterUser, Login, SearchTicket, BookingTicket, AddPriceList, ShowPriceList } = require("../app/services/handler");
const controllers = require("../app/controllers");
const apiRouter = express.Router();


apiRouter.use(express.json());

//Umum access
apiRouter.get('/user',showUsers)
apiRouter.post('/register',RegisterUser)
apiRouter.post('/login',Login) 

//yang bisa diakses user//
apiRouter.get('/Search-ticket', SearchTicket ),
apiRouter.post('/Booking-Ticket', BookingTicket),
apiRouter.post('/Ticket')
apiRouter.get('/Ticket')
apiRouter.get('/History')

//yang bisa diakses Admin//
apiRouter.get('/Price-List',ShowPriceList)
apiRouter.post('/Add-Price',AddPriceList)


apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);

module.exports = apiRouter;
