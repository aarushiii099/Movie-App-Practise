const MovieModel=require("../models/Model")
let Controllers={}


Controllers.create=async function(req,res){
    const data=req.body;
    try{
        const result=await MovieModel.create({
            name:data.name,
            rating:data.rating,
            duration:data.duration
        });
        res.status(201).send({msg:"Movie created successfully!",status:true});

    }
    catch(err){
        res.status(404).send({msg:"unknown error occured",status:false,error:err})
        console.log(err)
    }
}

Controllers.getMovies=async function(req,res){
    try{
        const result=await MovieModel.find({})
        res.status(202).send(result) 
    }
    catch(err){
        res.status(405).send({msg:"unknown error occured",status:false,error:err})

    }
}



module.exports=Controllers