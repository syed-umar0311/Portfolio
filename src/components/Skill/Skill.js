import React from "react";
import Navbar from "../navbar/Navbar";
import "../Skill/skill.css";
import html from "./images/html.png";
import css from "./images/css.png";
import js from "./images/js.png";
import react from "./images/react.png";
import ts from "./images/typescript.png";
import tailwind from "./images/tailwind.png";
import ui from "./images/ui.png";
import boot from "./images/bootstrap.png";
import redux from "./images/redux.png";
import mui from "./images/mui.png";
import node from "./images/node.png";
import fire from "./images/firebase.png";
import git from "./images/git.png";
import hub from "./images/github.png";
import py from './images/python.png'
import c from './images/c.png'
import cp from './images/cplus.png'
import java from './images/java.png'
import mongo from './images/mongo.png'
import ex from './images/express.png'
function Skill() {
  return (
    <>
    <div className="heading">
      <Navbar />
      <div className="h3"><h2 
        style={{
          textAlign: "center",
          color: "white",
          margin: "20px",
          fontFamily: "sans-serif",
          fontWeight: "bolder",
          fontStyle: "italic",
          textUnderlineOffset: "10px",
          
        }}
      >
        Frontend Technologies
      </h2></div>
      <div className="frontend">
        <div className="part1 small">
          <img src={html} alt=" logo " />
          <h4>HTML</h4>
        </div>
        <div className="part1 big">
          <img src={css} alt=" logo " />

          <h4>CSS</h4>
        </div>
        <div className="part1">
          <img src={js} alt=" logo " />

          <h4>Javascript</h4>
        </div>
        <div className="part1">
          <img src={react} alt=" logo " />

          <h4>React JS</h4>
        </div>
        <div className="part1">
          <img src={ts} alt=" logo " />

          <h4>Typescript</h4>
        </div>
        <div className="part1 boot">
          <img src={boot} alt=" logo " />

          <h4>Bootstrap</h4>
        </div>
        <div className="part1">
          <img src={tailwind} alt=" logo " />

          <h4>Tailwind CSS</h4>
        </div>
        <div className="part1">
          <img src={mui} alt=" logo " />

          <h4>Materail UI</h4>
        </div>
        <div className="part1">
          <img src={ui} alt=" logo " />

          <h4>UI Design</h4>
        </div>
        <div className="part1">
          <img src={redux} alt=" logo " />

          <h4>Redux</h4>
        </div>
      </div>
      <div className="h3"><h2
        style={{
          textAlign: "center",
          color: "white",
          margin: "20px",
          fontFamily: "sans-serif",
          fontWeight: "bolder",
          fontStyle: "italic",
          textUnderlineOffset: "10px",
        }}
      >
        Backend Technologies
      </h2></div>
      <div className="frontend">
        <div className="part1">
          <img src={node} alt=" logo " />
          <h4>Node JS</h4>
        </div>
        <div className="part1 small">
          <img src={fire} alt=" logo " />

          <h4>Firebase</h4>
        </div>
      </div>

     <div className="h3"> <h2
        style={{
          textAlign: "center",
          color: "white",
          margin: "20px",
          fontFamily: "sans-serif",
          fontWeight: "bolder",
          fontStyle: "italic",
          textUnderlineOffset: "10px",
        }}
      >
        Version Control & Collaboration
      </h2></div>
      <div className="frontend">
        <div className="part1">
          <img src={git} alt=" logo " />
          <h4>Git</h4>
        </div>
        <div className="part1">
          <img src={hub} alt=" logo " />

          <h4>Github</h4>
        </div>
      </div>
      <div className="h3"> <h2
        style={{
          textAlign: "center",
          color: "white",
          margin: "20px",
          fontFamily: "sans-serif",
          fontWeight: "bolder",
          fontStyle: "italic",
          textUnderlineOffset: "10px",
        }}
      >
        Other Programing Languages
      </h2></div>
      <div className="frontend">
        <div className="part1">
          <img src={py} alt=" logo " />
          <h4>Python</h4>
        </div>
        <div className="part1">
          <img src={java} alt=" logo " />

          <h4>Java</h4>
        </div>
        <div className="part1">
          <img src={c} alt=" logo " />

          <h4>   C   </h4>
        </div>
        <div className="part1">
          <img src={cp} alt=" logo " />

          <h4>   C++   </h4>
        </div>
      </div>
     <div className="h3"> <h2
        style={{
          textAlign: "center",
          color: "white",
          margin: "20px",
          fontFamily: "sans-serif",
          fontWeight: "bolder",
          fontStyle: "italic",
          textUnderlineOffset: "10px",
        }}
      >
        MERN STACK DEVELOPMENT
      </h2></div>
      <h5
        style={{
          textAlign: "center",
          color: "white",
          margin: "20px",
          fontFamily: "sans-serif",
          fontWeight: "bolder",
          fontStyle: "italic",
          textUnderlineOffset: "10px",
        }}
      >
Still Learning Right Now....
      </h5>
      <div className="frontend">
        <div className="part1">
          <img src={mongo} alt=" logo " />
          <h4>MongoDB</h4>
        </div>
        <div className="part1 big">
          <img src={ex} alt=" logo " />

          <h4>ExpressJS</h4>
        </div>
        <div className="part1">
          <img src={react} alt=" logo " />

          <h4>ReactJS</h4>
        </div>
        <div className="part1">
          <img src={node} alt=" logo " />

          <h4>NodeJS</h4>
        </div>
      </div>
      <br/>
      </div>
      
    </>
  );
}

export default Skill;
