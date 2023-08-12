import Intro from "./Intro"
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import User from "../pages/User";
import Test from "./Test";
import { BrowserRouter, Routes, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Intro />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/user" element={<User />} />
          <Route exact path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
