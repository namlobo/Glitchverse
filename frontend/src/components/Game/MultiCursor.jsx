import React, { useState } from 'react';
import './imagegrid.css';
import cdmain from '../../assets/cdmain.png';

export default function ImageGrid() {
  const [value, setValue] = useState(''); // ✅ moved inside the component

  const images = Array.from({ length: 45 }, (_, i) => ({
    id: i,
    src: cdmain,
    alt: `Button ${i + 1}`
  }));

  return (
    <>
      <div className="clue">
        <h1>The answer to everything after seven and a half million years of deep thought</h1>
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
          <button key={image.id} className="grid-item">
            <img src={image.src} alt={image.alt} />
          </button>
        ))}
      </div>
    </>
  );
}
