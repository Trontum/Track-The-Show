import { Link } from "react-router-dom";
import TitleAndCaption from "../Components/TitleAndCaption";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate=useNavigate();
    const [userEmail, setUserEmail]=useState("");
    const [userPassword, setUserPassword]=useState("");

    async function sendUserData(e){
        e.preventDefault();
        try{
            const resp=await axios.post("http://localhost:5000/login",{
                username: userEmail,
                password: userPassword
            });
            if(resp.data==="OK"){
                window.localStorage.setItem("isAuthenticated",true);
                navigate("/explore");
            }
            
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