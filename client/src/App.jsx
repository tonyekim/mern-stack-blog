import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Header from "./components/Header";
import FooterCom from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  return (
    <BrowserRouter>
      <Header />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />

        <Route element={<PrivateRoute />} >

        <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/project" element={<Project />} />
      </Routes>
     <FooterCom />
    </BrowserRouter>
  );
}

export default App;
