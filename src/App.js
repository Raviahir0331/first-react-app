import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import Home from "./components/Signup/Home/Home";

// const clientId = "291873637093-c7m10nmk9d1ij8d22p7o67cve2e34c9s.apps.googleusercontent.com";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signin" element={<SignIn isLoggin={true} />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
