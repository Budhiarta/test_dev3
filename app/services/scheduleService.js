const scheduleRepository = require("../repositories/scheduleRepository")

module.exports={
    CreateSchedule(requestBody){
        return scheduleRepository.createSchedule(requestBody)
    },
    async FindAllSchedule(){
        try{
            const schedule = scheduleRepository.findAllData()
            return{
                data : schedule
            }
        }catch(err){
            throw err
        }
    },
    async findschedule(requestBody){
        try{
            scheduleRepository.findSchedule(requestBody)
            return{
                data : data
            }
        }catch(err){
            throw err
        }
    },
    updateSchedule(id,requestBody){
        return scheduleRepository.UpdateSchedule(id, requestBody)
    },
    DeleteSchedule(id){
        return scheduleRepository.Delete_Schedule(id)
    }
}