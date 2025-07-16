import React, { useEffect } from "react";
import gsap from "gsap";
import './homepage.css';
import FuzzyText from "./FuzzyText"; // Adjust path if needed
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
    </div>
  );
}

export default Homepage;

