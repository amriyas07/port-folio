import React from "react";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Certification from "./components/Certification";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
function App() {

  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Certificate" element={<Certification/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Skills" element={<Skills/>}></Route>
        <Route path="/Projects" element={<Project/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
      </Routes>
    </Router>

    </>

  );
}

export default App
