import { useState ,useCallback,useEffect,useRef} from 'react'
import './App.css'

function App() {
  const [length,setLength] =useState(8)
  const [numberallowed,setNumberAllowed] =useState(false);
  const [charAllowed,setCharAllowed] =useState(false);
  const [password,setPassowrd] = useState("");

  //useReff hook
  const passwordRef=useRef(null);
  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberallowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*()_+?>{}::;'"

    for (let index = 1; index <=  length; index++) {
      let char =Math.floor(Math.random()*str.length+1)
      pass +=str.charAt(char)
      
    }

    setPassowrd(pass)


  },[length,numberallowed,charAllowed,setPassowrd])
  const copyPasswordToClipboard =useCallback(()=>{
    passwordRef.current ?.select();
    passwordRef.current?.setSelectionRange(0,16);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator();
  }
  ,[length,numberallowed,charAllowed,passwordGenerator])
  return (
    <>
  <div className="w-full max-w-md mx-auto shadow-lg rounded-xl px-6 py-5  my-10 text-orange-500  bg-gray-900">
    <h1 className="text-white text-2xl font-bold text-center mb-5 tracking-wide">
      Password Generator
    </h1>

    <div className=" flex shadow-inner rounded-lg overflow-hidden mb-6 border border-white">
      <input
        type="text"
        value={password}
        className="outline-none w-full py-2 px-4 bg-gray-800 text-white text-lg tracking-wider"
        placeholder="Generated password"
        readOnly
        ref={passwordRef}
      />
      <button
      onClick={copyPasswordToClipboard}
      >Copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input
         type="range"
         min={6}
         max={16}
         value={length}
         className='cursor-pointer'
         onChange={(e)=>{
          setLength(e.target.value)
         }}
        />
        <label >Length : {length}</label>

      </div>
      <div className='flex items-center gap-x-1'>
         <input
         type="checkbox"
         defaultChecked={numberallowed}
         id='numberInput'
         className='cursor-pointer'
         onChange={()=>{
          setNumberAllowed((prev)=> !prev);
         }}
        />
        <label htmlFor='numberInput' >numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
         <input
         type="checkbox"
         defaultChecked={charAllowed}
         id='charInput'
         className='cursor-pointer'
         onChange={()=>{
          setCharAllowed((prev)=> !prev);
         }}
        />
        <label htmlFor='charInput' >character</label>
      </div>

    </div>
  </div>
</>

  )
}

export default App
