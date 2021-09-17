import React,{useState} from 'react'

import Input  from '../../Components/Input/index'
import '../Login/index.css'
import Nav from '../../Components/Navbar'

const SignUp=()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPass,setconfirmPass]=useState('');
    const [emailError,setEmailError]=useState('');
    const [passError,setPassError]=useState('');
    const [confError,setconfError]=useState('');

    const handelSubmit=(e)=>{
        e.preventDefault();
        console.log(e.target.value)
    }
    return(
        <div className="Homepage">
            <Nav></Nav>
            <form className="loginForm SignUp" onSubmit={handelSubmit}>
                <h3 className="formTitle ">Sign Up</h3>
                <div>
                   <Input Label="Email" myFunction={setEmail} currentV={email} Placeholder="Enter Your Email"></Input>
                    {emailError.length > 0 ? <small className="Error">{emailError}</small> : null}
                    <Input Label="Password" myFunction={setPassword} currentV={password} Placeholder="Enter Your Password"></Input>
                    {passError.length > 0 ? <small className="Error">{passError}</small> : null}
                    <Input Label="Confirm Password" myFunction={setconfirmPass} currentV={confirmPass} Placeholder="ReEnter Your Password"></Input>
                    {confError.length > 0 ? <small className="Error">{confError}</small> : null}
                </div>
                    <button class="authButton">Sign Up</button>
        
            </form>
        </div>
    )
}

export default SignUp;