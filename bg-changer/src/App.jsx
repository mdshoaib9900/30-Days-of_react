import { useState } from "react"

function App() {
  const [color,setColor] = useState("olive")

  return (
    <>
     <div className="w-full  h-screen duration-200"
      style={{backgroundColor: color}}

    > 
    <div className="fixed flex flex-wrap justify-center bottom-12 
    inset-x-0 px-2">
      <div className="flex felx-wrap justify-center gap-3 shadow-lg bg-white 
      px-3 py-3 rounded-3xl" >
        <button onClick={()=>{setColor("red")}}
        className="outline-none px-4 py-1 rounded-full text-white
        shadow-sm cursor-pointer"
        style={{backgroundColor:"red"}}>Red</button>
        <button onClick={()=>{setColor("blue")}}
        className="outline-none px-4 py-1 rounded-full text-white
        shadow-sm cursor-pointer"
        style={{backgroundColor:"blue"}}>Blue</button>
        <button className="outline-none px-4 py-1 rounded-full text-white
        shadow-sm cursor-pointer" onClick={()=>{setColor("green")}}
        style={{backgroundColor:"Green"}}>Green</button>
        <button className="outline-none px-4 py-1 rounded-full text-white
        shadow-sm cursor-pointer" onClick={()=>{setColor("black")}}
        style={{backgroundColor:"black"}}>Black</button>
        <button className="outline-none px-4 py-1 rounded-full text-white
        shadow-sm cursor-pointer" onClick={()=>{setColor("purple")}}
        style={{backgroundColor:"purple"}}>Purple</button>
        <button className="outline-none px-4 py-1 rounded-full text-white
        shadow-sm cursor-pointer" onClick={()=>{setColor("gray")}}
        style={{backgroundColor:"gray"}}>Gray</button>
        <button className="outline-none px-4 py-1 rounded-full text-white
        shadow-sm cursor-pointer"  onClick={()=>{setColor("orange")}}
        style={{backgroundColor:"orange"}}>Orange</button>
      </div>

    </div>
    </div>
    </>
  )
}

export default App
