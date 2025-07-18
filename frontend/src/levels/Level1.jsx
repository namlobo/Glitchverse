import React from "react";
import { useNavigate } from "react-router-dom";
import FuzzyText from "../components/FuzzyText";

const Level1 = () => {
  const navigate = useNavigate();

  const handleStartTypingTest = () => {
    navigate("/typing"); // Ensure this route renders TypingSwap
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
      <div className="mb-12 mt-8">
        <FuzzyText fontSize="clamp(2rem, 6vw, 5rem)" fontFamily="Orbitron">
          🌐 Level 1: Typing Challenge
        </FuzzyText>
      </div>

      <button
        onClick={handleStartTypingTest}
        className="mt-8 px-8 py-4 bg-[#11df88] text-black font-bold rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
      >
        Start Typing Test
      </button>
    </div>
  );
};

export default Level1;
