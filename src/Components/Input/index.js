import React,{useState} from 'react'
import './index.css'

const Input=({myFunction,currentV,Placeholder,Label})=>{
    return(
        <div className="inputCont">
            <label>{Label}</label>
            <input type="text" value={currentV} onChange={(e)=>myFunction(e.target.value)}  placeholder={Placeholder}></input>
        </div>
    )
}


export default Input;