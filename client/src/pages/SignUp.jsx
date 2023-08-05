import { Link } from "react-router-dom";
import TitleAndCaption from "../Components/TitleAndCaption";
function SignUp(){
    return(
        <div>
            <TitleAndCaption />
            <button ><Link to="/login">Login</Link></button>
            <form >
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="submit" placeholder="Sign Up" />
            </form>
        </div>
    )
}
export default SignUp;