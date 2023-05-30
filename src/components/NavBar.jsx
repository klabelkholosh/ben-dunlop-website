/* React Components */
import React from 'react';

/* My Components */
import Logo from './Logo';

/* this is the left-hand side (or top most, if mobile) component, that holds the BD logo */
export default function NavBar({ showScroller, logoHeight }) {
  return (
    <div className="navBar">
      <Logo height={logoHeight} />
      {showScroller && (
        <div className="scroll-prompt" id="js_scrollPrompt">
          <div className="scroll-prompt-shape"></div>
        </div>
      )}
    </div>
  );
}
