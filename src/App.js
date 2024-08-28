import React from "react";
import "../src/App.css";
import Skill from "./components/Skill/Skill";
import Exp from './components/experince/Exp'
import Project from './components/projects/Project'
import Contact from './components/contact/Contact'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Download from './components/download/Download'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Main />
            
            </>
          }
        ></Route>
        <Route path="/skill" element={<Skill />}></Route>
        <Route path="/exp" element={<Exp />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/download" element={<Download />}></Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
