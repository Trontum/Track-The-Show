import { Link } from "react-router-dom";
import TitleAndCaption from "../Components/TitleAndCaption";
import { useState } from "react";
function SignUp(){
    const [userName, setUserName]=useState("");
    const [userEmail, setUserEmail]=useState("");
    const [userPassword, setUserPassword]=useState("");
    return(
        <div>
            <TitleAndCaption />
            <button ><Link to="/login">Login</Link></button>
            <form >
                <input type="text" placeholder="Name" onChange={e=>setUserName(e.target.value)} />
                <input type="email" placeholder="Email" onChange={e=>setUserEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={e=>setUserPassword(e.target.value)} />
                <input type="submit" placeholder="Sign Up" />
                
            </form>
        </div>
    )
}
export default SignUp;