import React, { useState } from 'react'

const UseStateArray = () => {
   var bioData = [
    {
      id:0, myName:"Vinny", age:26
    },
    {
      id:1, myName:'vinny2',age:27
    }
   ]
   
   const [myArray, setMyArray] = useState(bioData);
   const clearArray = ()=>{
       setMyArray([]);;
   }
  return (
    <div>
      {
        myArray.map((curElm)=>{
            return <h1 key={curElm.id}>Name:{curElm.myName}and age:{curElm.age}</h1>
        })
      }
      <button onClick={clearArray}>clear</button>
    </div>
  )
}

export default UseStateArray
