import { useState } from "react"
export function Experience(){
  const [experience,setExperience]=useState("")
  const onButtonClick=()=>{
    const newExperience=(prompt("Enter your new experience"))
    if (newExperience!=null){
      setExperience(newExperience)
   }
}
    return(
      <div>
        <h1>Educational Experience</h1>
        <h2>----------------------</h2>
        <p>
          {experience}
        </p>
        <button onClick={onButtonClick}>Edit</button>
      </div>
    )
  }
