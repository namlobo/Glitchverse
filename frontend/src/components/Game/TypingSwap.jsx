import React, {useState, useEffect, useRef} from "react";
import "./TypingSwap.css"; //styling
import typingData from '../../assets/data/typingData.json';


const fullText = typingData.text;

// const targetText = "The quick brown fox jumps over the lazy dog. Did you know Pandas were carnivorous long ago, but due to evolution, they somehow managed to evolve into herbivorous bears although maintaining their carnivorous gut.";

const TypingTest = ({ onComplete}) => {
    const [typedText, setTypedText] = useState("");
    const inputRef = useRef(null);
    const [showPopup, setShowPopup] = useState(false);
    const [wpm, setWpm] = useState(0);
    const [startTime, setStartTime] = useState(null);
    const [timeLeft, setTimeLeft] = useState(60); // 1 minute

    // Timer countdown effect
  useEffect(() => {
    if (!startTime || showPopup) return;

//     if (textDisplayRef.current) {
//     textDisplayRef.current.scrollTop = textDisplayRef.current.scrollHeight;
//   }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          calculateWPM();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [startTime, showPopup]);

    useEffect(()=>{
        inputRef.current.focus();
    }, []);

    const calculateWPM = () => {
 if (showPopup || !startTime) return;

  const timeTaken = (Date.now() - startTime) / 1000; // seconds
  const wordCount = typedText.trim().length > 0
    ? typedText.trim().split(/\s+/).length
    : 0;

  const calculatedWPM = wordCount > 0
    ? Math.round((wordCount / timeTaken) * 60)
    : 0;

  setWpm(calculatedWPM);
  setShowPopup(true);
  onComplete?.();
  };

    const handleChange = (e) => {
        const value = e.target.value;
        setTypedText(value);

        if (!startTime) setStartTime(Date.now());

        if(value===fullText){
            calculateWPM();
            onComplete?.(); //trugger callback when finished
        }
    };

    const renderText = () => {
        return fullText.split("").map((char,index) =>{
            const typedChar = typedText[index];

            let cName = "";
            if(typedChar == null) cName ="pending";
            else if( typedChar === char) cName = "correct";
            else cName = "incorrect";
            
            return(
                <span key={index} className={cName}>
                    {char}
                </span>
            );
        });
    };

    return(
        <div className="typing-test-container" onClick={() => inputRef.current.focus()}>
            <h2 className="test-title">WPM.exe</h2>
            <div className="timer">Time Left: {timeLeft}s</div>
            <div className="text-disp scrollable-text">{renderText()}</div>

            <input type="text" value={typedText} onChange={handleChange} ref={inputRef} className="hidden-input" autoComplete="off" />
<div className="keyboard-placeholder">
  <div className="keyboard-row row1">
    <span>Q</span><span>W</span><span>E</span><span>R</span><span>T</span><span>Y</span><span>U</span><span>I</span><span>O</span><span>P</span>
  </div>
  <div className="keyboard-row row2">
    <span>A</span><span>S</span><span>D</span><span>F</span><span>G</span><span>H</span><span>J</span><span>K</span><span>L</span>
  </div>
  <div className="keyboard-row row3">
    <span>Z</span><span>X</span><span>C</span><span>V</span><span>B</span><span>N</span><span>M</span>
  </div>
</div>




            
            
            {showPopup && (
        <div className="popup">
          <div className="popup-content">
            Great job!<br />
            Your WPM: <strong>{wpm}</strong>
            <br />
            <button onClick={() => window.location.reload()}>Retry</button>
          </div>
        </div>
      )}

        </div>
    );
};

export default TypingTest;
