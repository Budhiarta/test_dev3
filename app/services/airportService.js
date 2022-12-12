const airportRepository = require("../repositories/airportRepository")

module.exports={
    CreateAirport(reqBody){
        const airport = airportRepository.createAirport()
        return{airport}
    },
    async ListAirport(){
        const airport = await airportRepository.listAirport()
        return{airport}
    }
}