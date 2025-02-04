import React, { useState } from 'react'
// here spread operator is using to change the values of object so remaining values stay same and only required value is updated
const UsestateObject = () => {
    const[myObject, setMyObject] = useState({
        myName:"vinod" , myAge:27, degree:"Mcs"
    });
    const changeObject =()=>{
     setMyObject({...myObject, myName:'vinny'});
    }
  return (
    <div>
      <h1>Name:{myObject.myName}  & Age :{myObject.myAge} & Degree:{myObject.degree}</h1>
      <button onClick={changeObject}>Uppdate</button>
    </div>
  )
}

export default UsestateObject
