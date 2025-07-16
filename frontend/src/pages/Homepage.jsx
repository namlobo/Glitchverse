import React from "react";
import gsap from "gsap";
import './homepage.css';
import FuzzyText from "./FuzzyText"; // Adjust path if needed

function Homepage() {
  return (
    <div className="homepage-container">
      <FuzzyText 
        baseIntensity={0.2} 
        hoverIntensity={0.5} 
        enableHover={true}
      >
        GlitchVerse
      </FuzzyText>
      <h2 className="homepage-subtitle">Escape the corrupted digital world</h2>
    </div>
  );
}

export default Homepage;
