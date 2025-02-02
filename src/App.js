/*
<----------------------------useState  Hook------------------------------------------------------------------->
import {useState} from 'react';
const initialstate = false;

function App() {
  const[toggleText,setToggleText] = useState(false);

  function handleToggleText(){
     setToggleText (!toggleText)
  }
  return (
    <div>
      <h1>UseState Hooks</h1>
      {toggleText?<p>Hello world...!!</p>:<h1>Hello Everyone........!!!</h1>}
      <button onClick={handleToggleText}>Click Me</button>
    </div>
  );
}

export default App;

<----------------------second example of useState------------------------------------------------------>

import React, { useState } from 'react'

const initialstate ={
  name:'',
  city:''
}

const App = () => {
  const[formData,setFormData] = useState();
  function handleNameChange(event){
    setFormData({
      ...formData,
      name:event.target.value,
    });
  }
  function handleCityChange(event){
        setFormData({
          ...formData,
          city:event.target.value,
        });
  }
  return (
    <div>
       <input onChange={handleNameChange} type='text' name='name' placeholder='Enter Name'/>
       <select onChange={handleCityChange} name='city'>
          <option value={""} id="">Select City</option>
          <option value={"bengaluru"} id='bengaluru'>Bengaluru</option>
          <option value={"mumbai"} id='Mumbai'>Mumbai</option>
       </select>
       
       <div>
       <p> Name is {formData.name}</p>
        <p>city is {formData.city}</p>
       </div>
    </div>
  )
}

export default App


<---------------------useEffect----------------------------------------------------------->
import React, { useEffect, useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  const[showText, setShowText]= useState(false);
  const[productList,setProductList] = useState([]);

  async function fetchAllProducts() {
    try{
       const response = await fetch('https://dummyjson.com/products');
       const result = await response.json();
       if(result && result.products) setProductList(result.products);
    }catch(error){

    }
  }

 /* useEffect(()=>{
      return()=>{
         //clean up
        
        }
  },[]) 



  useEffect(()=>{
    if(count===5) setShowText(true);
  },[count])

  useEffect(()=>{
    if(count === 10) fetchAllProducts();
  },[count])
  return (
    <div>
      <h1>useEffect Hook</h1>
      <p>Count is {count}</p>
      {
        showText? <h3>Hello World</h3>:null
      }

      <button onClick={() => setCount(count+1)}>Increase Count</button>
      <ul>
        {
         productList && productList.length > 0 ? productList.map(item=> <li>{item.title}</li>) : null
        }
      </ul>
    </div>
  )
}

export default App
*/


import React from 'react'
import UseStateArray from './component/UseStateArray'
//import Usestate from './component/Usestate'

const App = () => {

  return (
    <>
       <UseStateArray/>
    </>
  )
}

export default App
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                