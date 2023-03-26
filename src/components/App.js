
import React from "react";
import './../styles/App.css';
import { useState,useEffect } from "react";

const App = () => {
  let [input,setInput]=useState('')

  useEffect(() => {
      console.log(`value changed:${input}`)
    
  }, [input]);
  let handle=(e)=>{
    setInput(e.target.value)
  }
  return (
    <div>
        <form>
          <input type='text' value={input} onChange={handle}/>
        </form>
    </div>
  )
}

export default App
