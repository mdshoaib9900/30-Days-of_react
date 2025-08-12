import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   let [counter,setCounter] =useState(0)

   const addValue=()=>{
    counter+=1;
    setCounter(counter)
    
   }
   const decValue=()=>{
    counter-=1;
    if(counter>=0){
      setCounter(counter)
    }else{
      alert("please increase counter")
    }
   }

  return (
    <>
    <h1>chai aur react</h1>
    <h2>counter value :{counter}</h2>
    <button
    onClick={addValue}>Add value</button>
    <button
    onClick={decValue}>decrease value</button>
    </>
  )
}

export default App
 