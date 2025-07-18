import React, {useState, useEffect, useRef} from "react";
import "./TypingSwap.css"; //styling

const targetText = "The quick brown fox jumps over the lazy dog. Did you know Pandas were carnivorous long ago, but due to evolution, they somehow managed to evolve into herbivorous bears although maintaining their carnivorous gut.";

const TypingTest = ({ onComplete}) => {
    const [typedText, setTypedText] = useState("");
    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
    }, []);

    const handleChange = (e) => {
        const value = e.target.value;
        setTypedText(value);

        if(value===targetText){
            onComplete?.(); //trugger callback when finished
        }
    };

    const renderText = () => {
        return targetText.split("").map((char,index) =>{
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
            <h2 className="test-title">Typing Test</h2>
            <div className="text-disp">{renderText()}</div>

            <input type="text" value={typedText} onChange={handleChange} ref={inputRef} className="hidden-input" autoComplete="off" />
            <div className="keyboard-placeholder">On-screen keyboard will appear here (Swapped Keys View)</div>


        </div>
    );
};

export default TypingTest;
