const express=require("express")
const router=express.Router()
const cors=require("cors")

const Controllers=require("../controllers/Controller")

router.use(cors())

router.post("/createMovie",Controllers.create)

router.get("/getMovies",Controllers.getMovies)


module.exports=router