import { Link } from "react-router-dom";
import TitleAndCaption from "./TitleAndCaption";
function Intro() {
    return (
        <div>
            <TitleAndCaption />
                <button ><Link to="/login">Login</Link></button>
                <button ><Link to="/signup">Sign Up</Link></button>

        </div>

    )
}
export default Intro;