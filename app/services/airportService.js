const airportRepository = require("../repositories/airportRepository")

module.exports={
    CreateAirport(reqBody){
        const airport = airportRepository.createAirport()
        return{airport}
    },
    ListAirport(){
        const airport = airportRepository.listAirport()
        return{airport}
    }
}