import React from 'react';

// handy dandy container for the top level SVG of a given SVG scene
export default function SVGContainer({
  viewdims,
  styleName = 'bookcase_scene',
  children,
}) {
  return (
    <svg
      id="bookcase_scene"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={
        viewdims[0] + ' ' + viewdims[1] + ' ' + viewdims[2] + ' ' + viewdims[3]
      }
      preserveAspectRatio="xMidYMid"
      className={styleName}
    >
      {children}
    </svg>
  );
}
