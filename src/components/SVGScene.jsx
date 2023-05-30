/* React Components */
import React from 'react';
import Book from './Book';

/* My Components */
import SVGContainer from './SVGContainer';

/* Consts */
import {
  SVG_BOOKCASE,
  SVG_POTPLANT,
  SVG_WHITEFILL,
  SVG_WALLSLINES,
  SVG_SCENE_VARS,
} from '../consts/consts';

// this function orchestrates the SVG 'scene', which switches around when different books are clicked
export default function SVGScene({
  viewboxx,
  viewboxy,
  viewboxwidth,
  viewboxheight,
  onSelect,
  spinefill,
  scene = 'default',
}) {
  const [width, setWidth] = React.useState(window.innerWidth);
  const svgSceneVars = SVG_SCENE_VARS.find((ob) => ob.scene === scene);
  const viewDims = () => {
    let dims = [viewboxx, viewboxy, viewboxwidth, viewboxheight];
    if (width <= 768) {
      dims = [
        viewboxx + 600,
        viewboxy + 250,
        viewboxwidth - 800,
        viewboxheight - 350,
      ];
    }
    return dims;
  };

  React.useEffect(() => {
    const updateWindowDimensions = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', updateWindowDimensions);

    return () => window.removeEventListener('resize', updateWindowDimensions);
  }, []);

  return (
    <div>
      <SVGContainer
        viewdims={viewDims()}
        styleName={svgSceneVars[width > 768 ? 'style' : 'style_mobile']}
      >
        <Books selectFunc={onSelect} fillArr={spinefill} />
        {SVG_WHITEFILL}
        {SVG_BOOKCASE}
        {width > 768 && SVG_WALLSLINES(svgSceneVars['wallslines_styles'])}
        {SVG_POTPLANT(onSelect)}
        {
          svgSceneVars[
            width > 768 ? 'svg_additionals' : 'svg_additionals_mobile'
          ]
        }
      </SVGContainer>
    </div>
  );
}

// internal function for displaying the three books correctly
function Books({ selectFunc, fillArr }) {
  return (
    <>
      <Book
        number="book1"
        clicked={() => selectFunc('book1')}
        fill={fillArr[0]}
        xoffset={0}
        yoffset={0}
      />
      <Book
        number="book2"
        clicked={() => selectFunc('book2')}
        fill={fillArr[1]}
        xoffset={47.49}
        yoffset={26.67}
      />
      <Book
        number="book3"
        clicked={() => selectFunc('book3')}
        fill={fillArr[2]}
        xoffset={47.49 * 2}
        yoffset={26.67 * 2}
      />
    </>
  );
}
