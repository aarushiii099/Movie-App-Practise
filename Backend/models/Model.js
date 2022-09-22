const mongoose=require("mongoose")
const Schema=mongoose.Schema
const MovieSchema=new Schema({
    name:{
        type:String
    },
    rating:{
        type:Number
        
    },
    duration:{
        type:String
        
    }

})

const MovieModel=mongoose.model("MovieModel",MovieSchema)

module.exports=MovieModel