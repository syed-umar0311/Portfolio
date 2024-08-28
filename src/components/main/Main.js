import React, { useState, useEffect, useRef } from "react";
import "../main/main.css"; 
import pic from "./home-main.svg"; 
import "../main/footer.css";
import facebook from "./facebook.png";
import github from "./github.png";
import lin from "./lin.png";

const typingTexts = ["Frontend Developer", "UI/UX Designer"];
const typingSpeed = 150; // Speed of typing (ms per character)
const erasingSpeed = 100; // Speed of erasing (ms per character)
const delayBetweenTexts = 3000; // Delay between texts (ms)

const rotatingTexts = [
  { h3: '2+ Years of Experience', h5: 'Strong skills , Expert in feild of Development' },
  { h3: 'Completed 50+ projects', h5: '' },
  { h3: 'Learning MERN STACK Right now...', h5: 'Future Full Stack Developer' },
];

function Main() {
  const [text, setText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingRef = useRef();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const typeEffect = () => {
      if (isDeleting) {
        if (charIndex > 0) {
          setText(typingTexts[textIndex].substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % typingTexts.length);
        }
      } else {
        if (charIndex < typingTexts[textIndex].length) {
          setText(typingTexts[textIndex].substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setIsDeleting(true);
        }
      }
    };

    typingRef.current = setInterval(
      typeEffect,
      isDeleting ? erasingSpeed : typingSpeed
    );
    return () => clearInterval(typingRef.current);
  }, [charIndex, isDeleting, textIndex]);

  useEffect(() => {
    if (!isDeleting && charIndex === typingTexts[textIndex].length) {
      const delayTimer = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetweenTexts);

      return () => clearTimeout(delayTimer);
    }
  }, [charIndex, isDeleting, textIndex]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="box">
        <div className="text">
          <h1>Hi! I'm Umar</h1>
          <h3>{text}</h3>
          <p>
            As a frontend React.js developer with over 2 years of experience, I
            have successfully completed 70+ projects, showcasing my expertise in
            building dynamic and responsive web applications. My commitment to
            delivering high-quality, user-friendly interfaces has consistently
            satisfied client needs. With a passion for continuous learning, I am
            now expanding my skill set to become a full-stack developer, eager to
            tackle new challenges and contribute to end-to-end project solutions.
          </p>
        </div>
        <div className="photo">
          <img src={pic} alt="Home main logo" />
        </div>
      </div>

      <div className="outer-div">
        <div className="inner-div">
          <h4 style={{color:"white"}}>{rotatingTexts[currentTextIndex].h3}</h4>
          <h5 style={{color:"white", fontSize:"18px" , fontStyle:"italic"}}>{rotatingTexts[currentTextIndex].h5}</h5>
        </div>
      </div>

      <div className="footer">
        <a href="https://github.com/syed-umar0311" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="Github" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100075204694030&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="https://www.linkedin.com/in/syed-umar-196320272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <img src={lin} alt="LinkedIn" />
        </a>
      </div>
    </>
  );
}

export default Main;
