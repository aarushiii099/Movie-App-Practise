
import {useEffect,useState} from "react"
import {useRef} from "react"
import ".././styles/Body.css"
import axios from "axios"

function Body(){

    const [name,setName]=useState("")
    const [ratings,setRatings]=useState(0)
    const [duration,setDuration]=useState("")
    const [flag,setFlag]=useState(false)
    const [message,setMessage]=useState("")

    const handleChange=(e,statename)=>{
        setFlag(false)
        if(statename==="name"){
            setName(e.target.value)
        }
        if(statename==="ratings"){
            setRatings(e.target.value)
        }
        if(statename==="duration"){
            setDuration(e.target.value)
        }

    }

    const handleSubmit=async (e)=>{
        e.preventDefault();
        console.log(duration)

        try{

            if(name==="" || ratings===0 || duration===""){
                setFlag(true)
                setMessage("Please enter valid values in every field")

            }
            else{
                let lastLetter=duration.slice(-1)

                if(lastLetter==="m"||lastLetter==="h"){
                    if(lastLetter==="m"){
                        let minutes=duration.slice(0,duration.length-1)
                        console.log(minutes)
                        var newduration=""
                        let hours=minutes/60
                        newduration=newduration+hours+"h"
                        console.log(newduration)//2h
                        setDuration("newduration")
                        console.log(duration)//120m
                    }
                }
                else{
                    setFlag(true)
                    setMessage("Please specify time in minutes or hours")
                }

            }
            console.log(duration)
            console.log("hit here")
            console.log(duration)
            setTimeout(()=>{
                const response= axios.post("http://localhost:3001/createMovie",{
                "name":name,
                "rating":ratings,
                "duration":duration

            })

            },7000)
            

            // console.log(response)

        }
        catch(error){
            console.log(error)

        }

        setName("")
        setRatings(0)
        setDuration("")

    }

return(
<div className="container d-flex">
    <div class="row">
    <form class="form" id="cont1" className="mt-5 d-flex flex-column p-3 bg-light rounded">
        <label>Movie Name:</label>
        <input type="text" placeholder="Enter Movie Name" value={name} onChange={(e)=>handleChange(e,"name")}></input><br></br><br></br>
        <label>Ratings:</label>
        <input type="text" placeholder="Enter Ratings"  value={ratings} onChange={(e)=>handleChange(e,"ratings")}></input><br></br><br></br>
        <label>Duration:</label>
        <input type="text" placeholder="Enter Duration" value={duration} onChange={(e)=>handleChange(e,"duration")}></input><br></br><br></br>
        <button type="button" id="btn" class="btn btn-success" onClick={(e)=>handleSubmit(e)}>Add Movie</button>
        {
            flag?<div>{message}</div>:<></>
        }
    </form>
    <div className="container mt-5">
    Search Movie: <input type="text" placeholder="Search for movie by name"></input>
    <div className="container mt-5" id="cont2">
        <div class="row">

        </div>
    </div>

    </div>
   

    </div>

{/* <div className=" d-flex ">
    <form class="form" id="cont1" className="mt-5 d-flex flex-column p-3 bg-light rounded w-100" ></form>
</div> */}

{/* <div className="d-flex justify-content-center p-5 mt-5">
<form class="form" id="cont2" className="mt-5 d-flex flex-column p-3 bg-dark rounded w-100" ></form>

</div> */}


</div>


)    



}
export default Body;