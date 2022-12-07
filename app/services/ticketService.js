const ticketRepository = require("../repositories/ticketRepository")

module.exports={
    createTicket(requestBody){
        return ticketRepository.createTicket(requestBody)
    },
    FindAllTicket(){
        ticketRepository.findAll().then((result)=>{
            return {
                data : result
            }
        }).catch(err=>{
            throw err
        })
    },
    DeleteTicket(id){
        return ticketRepository.Deleteticket(id)
    }
}

