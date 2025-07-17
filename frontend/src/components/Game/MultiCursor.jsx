import React from 'react';
import './imagegrid.css';
import cdmain from '../../assets/cdmain.png';

const images = Array.from({ length: 45 }, (_, i) => ({
  id: i,
  src: cdmain,
  alt: `Button ${i + 1}`
}));

export default function ImageGrid() {
  return (
    <>
      <div className="clue"><h1>Clue</h1></div>
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
