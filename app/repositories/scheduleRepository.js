const {Schedule} = require("../models")

module.exports={
    createSchedule(reqArgs){
        return Schedule.create(reqArgs)
    },
    findSchedule(reqArgs){
        return Schedule.findAll({where: {
            Origin_Airport : reqArgs.Origin_Airport,
            Destination_Airport : reqArgs.Destination_Airport,
            Plane_Class : reqArgs.Plane_Class,
            flight_Date : reqArgs.flight_Date
        }})
    },
    findAll(){
        return Schedule.findAll()
    },
    UpdateSchedule(id,reqArgs){
        return Schedule.update(reqArgs,{where:{id}})
    },
    DeleteSchedule(id){
        return Schedule.destroy(id)
    }
}