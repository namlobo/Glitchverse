// Mirror.jsx
import React from 'react';
import './imagegrid.css';

export default function Mirror({ x, y }) {
  return (
    <div
      className="fake-cursor"
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
    />
  );
} 