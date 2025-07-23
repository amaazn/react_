import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card';

function App() {
  const [count, setCount] = useState(0)
  
  let myObj = {
    username: "hitesh",
    age: 21
  }

   let newArr = [1, 2, 3]

  return (
    <>
      <div className='text-black bg-green-400'> hello param</div>
     <Card username="amaan"  btnText="click me"/>
      <Card username="hitesh"/>
    </>
  )
}

export default App
