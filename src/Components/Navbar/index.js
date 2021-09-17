import './index.css'

const Nav=()=>{
    return(
        <div className="NavContainer">
            <h2 className="NavTitle">ShortIt</h2>
            <div className="NavLinks">
                <button className="button2">Login</button>
                <button className="button1" style={{width : "80px"}}>SignUp</button>
            </div>
        </div>
    )
}

export default Nav