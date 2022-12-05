const express = require("express");
const handler = require("../app/services/handler");
const controllers = require("../app/controllers");
const apiRouter = express.Router();
const multer = require('multer');
const path = require('path');

const uploadDirectory = path.join(__dirname, "../uploads")

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, uploadDirectory)
    },

    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
    }
})


apiRouter.use(express.json());

//Umum access
apiRouter.get('/', handler.root)
apiRouter.post('/register', controllers.api.v1.authController.RegisterUser)
apiRouter.post('/login', controllers.api.v1.authController.login)
apiRouter.put('/user/:id/update', multer({storage:storage}).single("photo_profile"), controllers.api.v1.authController.updateUser)
apiRouter.get("/api/v1/whoami",
    controllers.api.v1.authController.authorize,
    controllers.api.v1.authController.whoAmI
)
apiRouter.get('/user/:id', controllers.api.v1.authController.show)

//yang bisa diakses user//
apiRouter.get('/Search-ticket', controllers.api.v1.schedController.filterSchedule),
apiRouter.post('/Booking-Ticket', handler.BookingTicket),
apiRouter.post('/Ticket')
apiRouter.get('/Ticket')
apiRouter.get('/History')

//yang bisa diakses Admin//
apiRouter.get('/user', controllers.api.v1.authController.validationAdmin, controllers.api.v1.authController.showUsers)
apiRouter.get('/Schedule', controllers.api.v1.authController.validationAdmin, controllers.api.v1.schedController.ShowTicket)
apiRouter.post('/Add-Schedule', controllers.api.v1.authController.validationAdmin, controllers.api.v1.schedController.AddSchedule)
apiRouter.put('/Edit-Schedule/:id', controllers.api.v1.authController.validationAdmin, controllers.api.v1.schedController.updateSchedules)
apiRouter.delete('/delete-Schedule/:id',controllers.api.v1.authController.validationAdmin, controllers.api.v1.schedController.deleteSchedule)


apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);

module.exports = apiRouter;
