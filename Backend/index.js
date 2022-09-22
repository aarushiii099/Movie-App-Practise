const express=require("express")
const server=express()
const bp=require("body-parser")
server.use(bp.json())
var cors=require('cors')


const Routes=require("./routes/Routes")




server.use("/",Routes)
server.use(cors())

const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/moviePracticeApp").then((res)=>console.log("connected to db")).catch((err)=>console.log(err))

server.listen(3001,()=>console.log("server started"))