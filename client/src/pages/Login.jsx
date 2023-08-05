import { Link } from "react-router-dom";
import TitleAndCaption from "../Components/TitleAndCaption";
function Login(){
    return (
        <div>
            <TitleAndCaption />
            <button ><Link to="/signup">Sign Up</Link></button>
            <form >
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <input type="submit" placeholder="Login" />

            </form>
        </div>
    )
}

export default Login;