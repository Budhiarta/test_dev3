const airportService = require("../../../services/airportService")

module.exports={
    async AddAirportList(req,res){
        try{
            const add = await airportService.CreateAirport(req)
            res.status(200).json({
                status:"Berhasil",
                data : add
            })
        }catch(err){
            throw err
        }
    },
    async showAirportList(req,res){
        try{
            const airport = await airportService.ListAirport()
            res.status(201).json({
                status:"berhasil",
                data : airport
            })
        }catch(err){
            throw err
        }
    }
}