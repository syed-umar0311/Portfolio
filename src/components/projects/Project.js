import React from "react";
import Navbar from "../navbar/Navbar";
import "../projects/project.css";
import "../../App.css";
import cal from "./cal.png";
import tic from "./tic.png";
import quiz from "./quiz.png";
import pizza from "./pizza.png";
import res from "./resturant.png";
import text from "./text.png";
import ama from "./amazon.png";
import shopify from "./shopify.png";
import news from "./news.png";
import ecom from "./ecom.png";
import el from "./elearning.png";
import admin from "./admin.png";
function Project() {
  return (
    <>
      <Navbar />

      {/* BEGINNER LEVEL */}
      <br />
      <div className="h2">
        {" "}
        <h2
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
          Beginner Projects
        </h2>
        <p style={{ color: "white", textAlign: "center", fontStyle: "italic" }}>
          HTML, CSS, JAVASCRIPT
        </p>
      </div>
      <div className="front">
        <div className="part big ">
          <a
            href="https://syed_umar_calculator.surge.sh"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={cal} alt=" logo " />
          </a>
          <h4>Modren Calculator</h4>
        </div>
        <div className="part ">
          <a
            href="https://enjoy_the_game_TicTacToe.surge.sh"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={tic} alt=" logo " />
          </a>

          <h4>Tic Tac Toe</h4>
        </div>
        <div className="part ">
          <a
            href="https://Programing_Quiz_App.surge.sh"
            rel="noopener noreferrer"
            target="_blank"
          >
            {" "}
            <img src={quiz} alt=" logo " />
          </a>

          <h4>Quiz App</h4>
        </div>
      </div>

      {/* INTERMEDIATE LEVEL */}

      <hr
        className="hr"
        style={{
          color: "white",
          backgroundColor: "white",
          border: "none",
          borderTop: "1px solid white",
        }}
      ></hr>
      <div className="h2">
        {" "}
        <h2
          style={{
            marginTop: "40px",
            textAlign: "center",
            color: "white",
            margin: "20px",
            fontFamily: "sans-serif",
            fontWeight: "bolder",
            fontStyle: "italic",
            textUnderlineOffset: "10px",
          }}
        >
          Intermediate Projects
        </h2>
        <p style={{ color: "white", textAlign: "center", fontStyle: "italic" }}>
          HTML, CSS, JAVASCRIPT, React, BOOTSTRAP, TAILWIND CSS, API, AXIOUS
        </p>
      </div>
      <div className="front">
        <div className="part  ">
          <a
            href="https://pizza-sh0p.web.app"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={pizza} alt=" logo " />
          </a>
          <h4>Pizza website</h4>
        </div>
        <div className="part">
          <a
            href="https://foodpoint360-51200.web.app"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={res} alt=" logo " />
          </a>

          <h4>Resturant Shop</h4>
        </div>
        <div className="part ">
          <a
            href="https://mytext-ef353.web.app"
            rel="noopener noreferrer"
            target="_blank"
          >
            {" "}
            <img src={text} alt=" logo " />
          </a>

          <h4>Text Editor</h4>
        </div>
        <div className="part ">
          <a
            href="https://clone-f50ae.web.app/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={ama} alt=" logo " />
          </a>
          <h4>Amazon Clone</h4>
        </div>
        <div className="part ">
          <a
            href="https://shopify-tail-wind-clone.netlify.app"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={shopify} alt=" logo " />
          </a>
          <h4>Shopify Clone</h4>
        </div>
        <div className="part big">
          <a
            href="https://yournewsdaily.netlify.app"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={news} alt=" logo " />
          </a>
          <h4>News App</h4>
        </div>
      </div>

      {/* EXPERT LEVEL PROJECT */}

      <hr
        className="hr"
        style={{
          color: "white",
          backgroundColor: "white",
          border: "none",
          borderTop: "1px solid white",
        }}
      ></hr>
      <div className="h2">
        {" "}
        <h2
          style={{
            marginTop: "40px",
            textAlign: "center",
            color: "white",
            margin: "20px",
            fontFamily: "sans-serif",
            fontWeight: "bolder",
            fontStyle: "italic",
            textUnderlineOffset: "10px",
          }}
        >
          Intermediate Projects
        </h2>
        <p style={{ color: "white", textAlign: "center", fontStyle: "italic" }}>
          HTML, CSS, JAVASCRIPT, TYPESCRIPT, REACT, REDUX, BOOTSTRAP, TAILWIND
          CSS, NODE, FIREBASE
        </p>
      </div>
      <div className="front">
        <div className="part big ">
          <a
            href="https://redux-concept.web.app"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={ecom} alt=" logo " />
          </a>
          <h4>E-commerce</h4>
        </div>
        <div className="part big">
          <a
            href="https://subscription.packtpub.com/?_gl=1*isn9q0*FPAU*MTU2MDExNzIwNC4xNzI0NzkxMTMw*_ga*MjA1MzMxMTc4NC4xNzI0NzkxMTMw*_ga_Q4R8G7SJDK*MTcyNDc5MTEyOS4xLjEuMTcyNDc5MjM0OS4wLjAuMTE3ODk4Nzg1MQ..*_fplc*NmtzQUElMkZWYmttQjZmU3VlSzNZdnpvOVE0a2V5VXM5OHhwcWFQZkthVTBwUThGSG8lMkZtMU4zd2dVcWVjd1oxbDhMTkxjVWNZWEolMkZvNGtwRVREdEdXRGZkek5JREtxVnd3VWJJSlJjc3Fsa0NSeUZHdjkySGFDM25zcUFBYTNRJTNEJTNE"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={el} alt=" logo " />
          </a>

          <h4>Online Packt</h4>
        </div>
        <div className="part ">
          <a
            href="https://ecommerce-admin-dashboard-liard.vercel.app/sign-in?redirect_url=https%3A%2F%2Fecommerce-admin-dashboard-liard.vercel.app%2F"
            rel="noopener noreferrer"
            target="_blank"
          >
            {" "}
            <img src={admin} alt=" logo " />
          </a>

          <h4>Store Admin Portal</h4>
        </div>
      </div>
    </>
  );
}

export default Project;
