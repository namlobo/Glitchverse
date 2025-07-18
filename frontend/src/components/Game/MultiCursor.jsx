import React, { useState, useEffect } from 'react';
import Mirror from './Mirror';
import './imagegrid.css';
import cdmain from '../../assets/cdmain.png';

export default function MultiCursor() {
  const [value, setValue] = useState('');
  const [fakeCursors, setFakeCursors] = useState([]);
  const [showHint, setShowHint] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [clickedBoxes, setClickedBoxes] = useState(new Set());

  const correctBox = 41; // 0-indexed, box 42
  const hintBoxes = {
    4: { type: 'easy', prompt: 'Box 17 glows slightly. Maybe check there?', answer: null },
    16: { type: 'easy', prompt: 'ASCII of `*` is what? Multiply it by 1.', answer: '42' },
    17: { type: 'easy', prompt: 'The answer to everything... sometimes is the number itself.', answer: '42' },

    9: { type: 'moderate', prompt: 'Inspect the page title in dev tools. Clue lies there.', answer: 'kernel42' },
    13: { type: 'moderate', prompt: 'youtube.com/watch?v=abo-sample-id -> what', answer:'42' },
    21: { type: 'moderate', prompt: 'Find the hidden div with id="ultimate" in DOM.', answer: '42' },

    30: { type: 'hard', prompt: 'Which protocol uses port 53 by default?', answer: 'DNS' },
    33: { type: 'hard', prompt: 'TTL in IP header stands for?', answer: 'Time To Live' },
    38: { type: 'hard', prompt: 'In OSI model, what layer is IP in?', answer: 'Network Layer' },
    41: { type: 'hard', prompt: 'The ultimate answer according to Deep Thought?', answer: '42' },
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setFakeCursors((prev) =>
        prev.map((cursor) => ({
          ...cursor,
          x: e.clientX + (Math.random() * 60 - 30),
          y: e.clientY + (Math.random() * 60 - 30),
        }))
      );
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (hintsUsed === 0) {
        setShowHint(true);
        setHintsUsed(1);
      }
    }, 60000); // 60s
    return () => clearTimeout(timer);
  }, [hintsUsed]);

  const handleClick = (index) => {
    if (clickedBoxes.has(index)) return;
    setClickedBoxes(new Set(clickedBoxes).add(index));

    if (index === correctBox) {
      alert('You found the answer: 42. Level complete!');
      return;
    }

    if (hintBoxes.hasOwnProperty(index)) {
      const hint = hintBoxes[index];
      alert(`${hint.type.toUpperCase()} Prompt: ${hint.prompt}`);
      if (hint.type === 'easy') {
        setFakeCursors((prev) => [...prev, { x: 0, y: 0 }]);
      } else if (hint.type === 'moderate') {
        setFakeCursors((prev) => [...prev, { x: 0, y: 0 }, { x: 0, y: 0 }]);
      } else if (hint.type === 'hard') {
        setFakeCursors((prev) => [...prev, { x: 0, y: 0 }]);
      }
    } else {
      // random box, fake cursor penalty
      setFakeCursors((prev) => [...prev, { x: 0, y: 0 }, { x: 0, y: 0 }]);
    }
  };

  const images = Array.from({ length: 45 }, (_, i) => ({
    id: i,
    src: cdmain,
    alt: `CD ${i + 1}`,
  }));

  return (
    <>
      <div className="clue">
        <h1>The answer to everything after seven and a half million years of deep thought</h1>
        {showHint && <p className="hint-popup">Hint: Check the lower rows for glowing boxes. You might find an answer soon.</p>}
      </div>

      <div className="ans">
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      
      <div className="grid-container">
        {images.map((image) => (
          <button key={image.id} className="grid-item" onClick={() => handleClick(image.id)}>
            <img src={image.src} alt={image.alt} />
          </button>
        ))}
      </div>
        
      {fakeCursors.map((cursor, idx) => (
        <Mirror key={idx} x={cursor.x} y={cursor.y} />
      ))}
    </>
  );
} 