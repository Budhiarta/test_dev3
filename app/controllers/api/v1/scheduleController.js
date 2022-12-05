const scheduleService = require("../../../services/scheduleService")

module.exports={
    async AddSchedule(req,res){
        try{
            const schedule = await scheduleService.CreateSchedule(req.body)
            return res.send(200).json({
                Origin_Airport : schedule.Origin_Airport,
                Destination_Airport: schedule.Destination_Airport,
                Plane_class: schedule.Plane_class,
                Airline_Name: schedule.Airline_Name,
                Price: schedule.Price,
                flight_Date: schedule.flight_Date,
                Departure_Hour: schedule.Departure_Hour,
                Arrival_Hour: schedule.Arrival_Hour
            })  
        }catch(err){
            res.status(401).json({
                message: err.message
            })
        }
    },
    async updateSchedules(req,res){
        try{
            const schedule = await scheduleService.updateSchedule(req.params.id, req.body)
            res.send(200).json({
                Origin_Airport : schedule.Origin_Airport,
                Destination_Airport: schedule.Destination_Airport,
                Plane_class: schedule.Plane_class,
                Airline_Name: schedule.Airline_Name,
                Price: schedule.Price,
                flight_Date: schedule.flight_Date,
                Departure_Hour: schedule.Departure_Hour,
                Arrival_Hour: schedule.Arrival_Hour
            })
        }catch(err){
            res.status(402).json({
                message: err.message
            })
        }
    },
    async deleteSchedule(req,res){
        try{
            await scheduleService.DeleteSchedule(req.params.id)
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
    async ShowTicket(req,res){
        try{
            await scheduleService.FindAllSchedule()
            .then((data)=>{
                res.status(201).json({
                    data:data
                })
            })
        }catch(err){
            throw err
        }
    },
    async filterSchedule(req,res){
        try{
            await scheduleService.findschedule(req.body)
            .then((data)=>{
                res.status(203).json({
                    data : data
                })
            })
        }catch(err){
            throw err
        }
    }
}
