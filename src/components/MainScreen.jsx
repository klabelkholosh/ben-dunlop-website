/* React Components */
import React from 'react';

/* My Components */
import SVGScene from './SVGScene';
import TextArea from './TextArea';

/* Consts */
import { BOOK_TEXT, SPINE_FILL } from '../consts/consts';

// this component handles the right-hand (or below the logo, if mobile) side of the site, ie. the bookcase and the text area
export default function MainScreen() {
  const [switchBook, setSwitchBook] = React.useState('default');
  const textSceneVars = BOOK_TEXT.find((ob) => ob.scene === switchBook);

  //what happens when a book is clicked
  const handleSelect = (bookId) => {
    setSwitchBook(bookId);
  };

  return (
    <div className="mainMenuDiv">
      <SVGScene
        viewboxx={0}
        viewboxy={0}
        viewboxwidth={1260}
        viewboxheight={900}
        onSelect={handleSelect}
        spinefill={SPINE_FILL}
        scene={switchBook}
      />
      <TextArea
        liText={textSceneVars.text}
        type={textSceneVars.type}
        fontSize={textSceneVars.fontSize}
      />
    </div>
  );
}
