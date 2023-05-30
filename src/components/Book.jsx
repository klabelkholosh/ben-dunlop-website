import React from 'react';

// SVG for the book which resides in the bookcase
export default function Book({ number, clicked, xoffset, yoffset, fill }) {
  return (
    <g
      id={number}
      stroke="#000"
      strokeMiterlimit="10"
      className="cBookStatic"
      onClick={clicked}
    >
      <g fill="none" strokeWidth="0.913">
        <polygon
          points={`
            ${766.32 + xoffset} 
            ${511.13 + yoffset} 
            ${766.32 + xoffset} 
            ${462.62 + yoffset} 
            ${777.99 + xoffset} 
            ${468.73 + yoffset} 
            ${777.21 + xoffset} 
            ${515.95 + yoffset} 
            ${766.32 + xoffset} 
            ${511.13 + yoffset}
          `}
          fill={fill}
        />
        <polygon
          points={`
            ${766.32 + xoffset} 
            ${462.62 + yoffset} 
            ${787.71 + xoffset} 
            ${450.62 + yoffset} 
            ${787.71 + xoffset} 
            ${454.37 + yoffset} 
            ${795.87 + xoffset} 
            ${451.01 + yoffset} 
            ${769.32 + xoffset} 
            ${464.62 + yoffset}
          `}
          fill={fill}
        />
        <polygon
          points={`
            ${778.32 + xoffset} 
            ${468.62 + yoffset} 
            ${787.71 + xoffset} 
            ${465.62 + yoffset} 
            ${787.71 + xoffset} 
            ${454.37 + yoffset} 
            ${795.87 + xoffset} 
            ${451.01 + yoffset} 
            ${769.32 + xoffset} 
            ${464.62 + yoffset}
          `}
          fill={`#FFFFFF`}
        />
        <polygon
          points={`
            ${777.21 + xoffset} 
            ${515.95 + yoffset} 
            ${799.05 + xoffset} 
            ${503.45 + yoffset} 
            ${799.05 + xoffset} 
            ${496.12 + yoffset} 
            ${799.05 + xoffset} 
            ${457.29 + yoffset}  
            ${777.99 + xoffset} 
            ${468.73 + yoffset}
          `}
          fill={fill}
        />
      </g>
    </g>
  );
}
