import React,{useState} from 'react'

import Input  from '../../Components/Input/index'
import './index.css'
import Nav from '../../Components/Navbar'

const Login=()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [emailError,setEmailError]=useState('');
    const [passError,setPassError]=useState('');

    const handelSubmit=(e)=>{
        e.preventDefault();
        console.log(e.target.value)
    }
    return(
        <div className="Homepage">
            <Nav></Nav>
            <form className="loginForm" onSubmit={handelSubmit}>
                <h3 className="formTitle">Login</h3>
                <div>
                   <Input Label="Email" myFunction={setEmail} currentV={email} Placeholder="Enter Your Email"></Input>
                    {emailError.length > 0 ? <small className="Error">{emailError}</small> : null}
                    <Input Label="Password" myFunction={setPassword} currentV={password} Placeholder="Enter Your Password"></Input>
                    {passError.length > 0 ? <small className="Error">{passError}</small> : null}
                </div>
                    <button class="authButton">Login</button>
        
            </form>
        </div>
    )
}

export default Login;