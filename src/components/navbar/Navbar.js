import React from "react";
import "../navbar/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const download = () => {
    const link = document.createElement("a");
    link.href = "/Umar_Resume.pdf";
    link.download = "Umar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="main">
      <div className={`inner`}>
        <Link to="/">HOME</Link>
        <Link to="/skill">SKILL</Link>
        <Link to="/exp">EXPERIENCE</Link>
        <Link to="/project">PROJECT</Link>
        <Link to="/contact">CONTACT ME</Link>
        <button className="download" onClick={download}>
          DOWNLOAD CV
        </button>
      </div>
    </div>
  );
}

export default Navbar;
