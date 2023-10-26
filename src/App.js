import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import SignIn from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import Home from "./components/Signup/Home/Home";
import Header from "./components/Header/Header";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/signup" element={<Signup />} />
      

      </Routes>
    </BrowserRouter>
  );
}

export default App;
