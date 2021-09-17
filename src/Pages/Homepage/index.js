import React,{useState} from 'react'
import Nav from '../../Components/Navbar'
import validator from 'validator'
import './index.css'


const Hompage=()=>{
    const [link,handelLink]=useState('');
    const [error,handelErrors]=useState('');
    const [result,setResult]=useState('');
    const handelSubmit=(event)=>{
        event.preventDefault()
        if(validator.isURL(link))
        {
           console.log(link)
           handelLink('');
           handelErrors('');
           setResult(link);
        }else{
            handelErrors('Enter Valid Url');
            setResult('')
        }
    }

    return(
        <div className='Homepage'>
            <Nav/>
            <div class="FormHandler">
                {error.length > 0 ? <small className='Error'>{error}</small> : null}
                <form onSubmit={handelSubmit}>
                    <input placeholder="Enter Your URL" className="HomeIn" value={link} onChange={(e)=> handelLink(e.target.value)}></input>
                    { 
                     link.length == 0 ? <button className="button1" disabled>Shorten my Link</button> :
                     <button className="button1" >Shorten my Link</button>
                    }
                </form>
                {
                    result.length> 0 ? 
                    (
                        <div className="HomePageResult">
                            <h1>Hurray! Here is Your Freshly Cooked Little Tiny URL</h1>
                            <input className="resultInp" value={result}></input>
                        </div>
                    ) : null
                }
            </div>
        </div>
    )
}

export default Hompage