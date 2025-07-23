import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
   let [counter,setCounter]=useState(4)
   //let counter=15
   const addValue=()=>{
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
    //setCounter(counter+1)
    // console.log("clicked",counter);
    // counter=counter+1
    
   }

    const removeValue=()=>{
      
     setCounter(prevCounter=>prevCounter-1)
     setCounter(prevCounter=>prevCounter-1)
     setCounter(prevCounter=>prevCounter-1)
      //setCounter(counter-1)
     // setCounter(counter-1)
    // console.log("clicked",counter);
    // counter=counter-1
    
   }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value:{counter}</h2> 

      <button onClick={addValue}>add value</button>
      <br/>
      <button onClick={removeValue}>remove</button>
      
    </>
  )
}

export default App
