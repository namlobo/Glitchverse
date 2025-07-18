import React, { useEffect } from "react";
import gsap from "gsap";
import './homepage.css';
import FuzzyText from "../components/FuzzyText.js"; // Adjust path if needed
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

import './cursor.css';

function Homepage() {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");
    const move = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };
    document.addEventListener("mousemove", move);
    return () => document.removeEventListener("mousemove", move);
  }, []);
  const { logout } = useAuth(); // ✅ extract logout from context
  const navigate = useNavigate(); // ✅ initialize navigate hook


  const handleLogout = () => {
    logout();             // Clear auth state
    navigate("/");   // Redirect to login page
  };


  return (
    <div className="homepage-container">
      <div className="custom-cursor" />
      <FuzzyText 
        baseIntensity={0.2} 
        hoverIntensity={0.5} 
        enableHover={true}
      >
        GlitchVerse
      </FuzzyText>
      <h2 className="homepage-subtitle">The system wants you to fail. Prove it wrong.</h2>
      <button className="start-button">Start</button>
      <button className="logout-button" onClick={handleLogout}>Logout</button>

    </div>
  );
}

export default Homepage;

