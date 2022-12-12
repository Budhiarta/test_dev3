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
    async ShowAirportList(req,res){
        try{
            await airportService.ListAirport()
            .then((data)=>{
                res.status(200).json({
                    status: "OK",
                    data: data
                })
            })
        }catch(err){
            throw err
        }
    },
}