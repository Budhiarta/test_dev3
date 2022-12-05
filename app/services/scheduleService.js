const scheduleRepository = require("../repositories/scheduleRepository")

module.exports={
    CreateSchedule(requestBody){
        return scheduleRepository.createSchedule(requestBody)
    },
    FindAllSchedule(){
        scheduleRepository.findAll().then((result)=>{
            return {
                data : result
            }
        }).catch(err=>{
            throw err
        })
    },
    findschedule(requestBody){
        scheduleRepository.findSchedule(requestBody).then((result)=>{
            return{
                data : result
            }
        }).catch((err)=>{
            throw err
        })
    },
    updateSchedule(id,requestBody){
        return scheduleRepository.UpdateSchedule(id, requestBody)
    },
    DeleteSchedule(id){
        return scheduleRepository.DeleteSchedule(id)
    }
}