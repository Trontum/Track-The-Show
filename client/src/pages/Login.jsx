import { Link } from "react-router-dom";
import TitleAndCaption from "../Components/TitleAndCaption";
import { useState } from "react";
import axios from "axios";


function Login(){
    const [userEmail, setUserEmail]=useState("");
    const [userPassword, setUserPassword]=useState("");
    async function sendUserData(e){
        e.preventDefault();
        try{
            const resp=await axios.post("http://localhost:5000/login",{
                email: userEmail,
                password: userPassword
            });
            console.log(resp);
        }
        catch(err){
            console.error(err);
        }
    }
    
    return (
        <div>
            <TitleAndCaption />
            <button ><Link to="/signup">Sign Up</Link></button>
            <form >
                <input type="email" placeholder="email" onChange={e=>setUserEmail(e.target.value)} />
                <input type="password" placeholder="password" onChange={e=>setUserPassword(e.target.value)} />
                <input type="submit" placeholder="Login" onClick={e=>sendUserData(e)} />
            </form>
        </div>
    )
}

export default Login;