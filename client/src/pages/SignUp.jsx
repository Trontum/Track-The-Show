import { Link, useNavigate } from "react-router-dom";
import TitleAndCaption from "../Components/TitleAndCaption";
import { useState } from "react";
import axios from "axios";
function SignUp(){
    const navigate=useNavigate();
    const [userName, setUserName]=useState("");
    const [userEmail, setUserEmail]=useState("");
    const [userPassword, setUserPassword]=useState("");
    async function sendUserData(e){
        e.preventDefault();
        try{
            const resp=await axios.post("http://localhost:5000/signup",{
                name:userName,
                username: userEmail,
                password: userPassword
            });
            if(resp.data==="OK"){
                navigate("/user");
            }
        }
        catch(err){
            console.error(err);
        }
    }
    
    return(
        <div>
            <TitleAndCaption />
            <button ><Link to="/login">Login</Link></button>
            <form >
                <input type="text" placeholder="Name" onChange={e=>setUserName(e.target.value)} />
                <input type="email" placeholder="Email" onChange={e=>setUserEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={e=>setUserPassword(e.target.value)} />
                <input type="submit" placeholder="Sign Up" onClick={e=>sendUserData(e)} />
                
            </form>
        </div>
    )
}
export default SignUp;