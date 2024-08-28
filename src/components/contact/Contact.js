import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import '../contact/contact.css';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function send() {
    if (!name || !email) {
      showAlert("Please fill out both your name and email before sending.");
      return;
    }
    showAlert(`Successfully sent query. We will respond to you shortly, ${name}`);
     setTimeout(() => {
      navigate('/');
    }, 3000);
  }

  // Function to show the custom alert
  function showAlert(message) {
    document.getElementById('alert-message').textContent = message;
    document.getElementById('custom-alert').style.display = 'flex';
  }

  // Function to close the custom alert
  function closeAlert() {
    document.getElementById('custom-alert').style.display = 'none';
  }

  return (
    <>
      <Navbar />
      <div className="contact">
        <div className="us">
          <h2>Contact Me</h2>
          <h5>Name:</h5>
          <input
            type="name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <h5>Email:</h5>
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <input
            type="text"
            placeholder="Write Query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="send" onClick={send}>Send</button>
        </div>
      </div>

      {/* Custom Alert */}
      <div id="custom-alert" className="custom-alert">
        <div className="custom-alert-content">
          <span className="close-alert" onClick={closeAlert}>&times;</span>
          <p id="alert-message">This is a custom alert message!</p>
        </div>
      </div>
    </>
  );
}

export default Contact;
