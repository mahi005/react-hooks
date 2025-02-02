import React ,{useState} from 'react'

const Usestate = () => {
    
  const [myName, setMyName] = useState("You can change the text")

  const changeName=()=>{
        let val = myName;
        if(val=== 'You can change the text'){
          setMyName('Your text has been changed');
        }else{
          setMyName('You can change the text');
        }
        // ------------another way------------------------
        /*(val==='you can change the text')? setMyName('your text has been changed'): setMyName('you can change the text');
        */
  }
  return (
    <div>
      <h1>{myName}</h1>
      <button className='btn' onClick={changeName}>Click me</button>
    </div>
  )
}

export default Usestate
