import { useState } from "react";
import React from 'react'

export default function Form() {


    const change = (event)=>{

        setText(event.target.value)
    }

    const clickedMe=()=>{

        const newValue=text.toUpperCase();
        setText(newValue);
        

    }

    const [text, setText] = useState("my name is ");


  return (

   

    <div className='container'>
      <h2>enter text here</h2>
      <textarea name="textarea" id="text" cols="100" rows="10" onChange={change} value={text} ></textarea><br/>
      <button className="btn btn-primary" onClick={clickedMe}>convert to uppercase</button>
    </div>
  )
}
