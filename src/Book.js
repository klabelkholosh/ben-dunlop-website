import * as React from 'react';

export default function Book(props) {
  return (
    <g
      id={props.number}
      stroke="#000"
      strokeMiterlimit="10"
      className="cBookStatic"
      onClick={props.clicked}
    >
      <g fill="none" strokeWidth="0.913">
        <polygon
          points={`
            ${766.32 + props.xoffset} 
            ${511.13 + props.yoffset} 
            ${766.32 + props.xoffset} 
            ${462.62 + props.yoffset} 
            ${777.99 + props.xoffset} 
            ${468.73 + props.yoffset} 
            ${777.21 + props.xoffset} 
            ${515.95 + props.yoffset} 
            ${766.32 + props.xoffset} 
            ${511.13 + props.yoffset}
          `}
          fill={props.fill}
        />
        <polygon
          points={`
            ${766.32 + props.xoffset} 
            ${462.62 + props.yoffset} 
            ${787.71 + props.xoffset} 
            ${450.62 + props.yoffset} 
            ${787.71 + props.xoffset} 
            ${454.37 + props.yoffset} 
            ${795.87 + props.xoffset} 
            ${451.01 + props.yoffset} 
            ${769.32 + props.xoffset} 
            ${464.62 + props.yoffset}
          `}
          fill={props.fill}
        />
        <polygon
          points={`
            ${778.32 + props.xoffset} 
            ${468.62 + props.yoffset} 
            ${787.71 + props.xoffset} 
            ${465.62 + props.yoffset} 
            ${787.71 + props.xoffset} 
            ${454.37 + props.yoffset} 
            ${795.87 + props.xoffset} 
            ${451.01 + props.yoffset} 
            ${769.32 + props.xoffset} 
            ${464.62 + props.yoffset}
          `}
          fill={`#FFFFFF`}
        />
        <polygon
          points={`
            ${777.21 + props.xoffset} 
            ${515.95 + props.yoffset} 
            ${799.05 + props.xoffset} 
            ${503.45 + props.yoffset} 
            ${799.05 + props.xoffset} 
            ${496.12 + props.yoffset} 
            ${799.05 + props.xoffset} 
            ${457.29 + props.yoffset}  
            ${777.99 + props.xoffset} 
            ${468.73 + props.yoffset}
          `}
          fill={props.fill}
        />
      </g>
    </g>
  );
}
