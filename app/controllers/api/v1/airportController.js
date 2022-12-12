const airportService = require("../../../services/airportService")

module.exports={
    async AddAirportList(req,res){
        try{
            const add = await airportService.CreateAirport(req)
            res.status(200).json({
                status:"Berhasil",
                data : airport
            })
        }catch(err){
            throw err
        }
    }
}