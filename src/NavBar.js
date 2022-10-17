/* React Components */
import React, { Component } from 'react';

/* My Components */
import Logo from './Logo';

class NavBar extends Component {
  render() {
    let { showScroller, logoHeight } = this.props;

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
}

export default NavBar;
