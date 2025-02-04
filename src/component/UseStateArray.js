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
   const removeElem =(id)=>{
       const myNewArray = myArray.filter((curElm)=>{
        return curElm.id !== id;
       })
       setMyArray(myNewArray);
   }
  return (
    <div>
      {
        myArray.map((curElm)=>{
            return (
            <h1 key={curElm.id}>Name:{curElm.myName}and age:{curElm.age}
            <button className='="btnInner' onClick={()=> removeElem(curElm.id)}>Remove</button>
            </h1>
          );
        })
      }
      <button onClick={clearArray}>clear</button>
    </div>
  )
}

export default UseStateArray
