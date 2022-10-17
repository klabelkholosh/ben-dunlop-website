/* React Components */
import React, { Component } from 'react';

/* My Components */
import NavBar from './NavBar';
import MainScreen from './MainScreen';

class App extends Component {
  constructor() {
    super();

    this.state = {
      showScroller: false,
      logoHeight: '100vh',
    };
  }

  //function that either shows or hides the scroller!
  switchScroller = () => {
    let newScrollState = !this.state.showScroller;
    this.setState({
      showScroller: newScrollState,
    });
  };

  //every 3 seconds, fire the scroller switch
  componentDidMount() {
    setInterval(this.switchScroller, 3000);
  }

  render() {
    let { showScroller, logoHeight } = this.state;

    return (
      <div className="appDiv" id="appDiv">
        <NavBar
          id="NavBar"
          showScroller={showScroller}
          logoHeight={logoHeight}
        />
        <MainScreen id="MainScreen" />
      </div>
    );
  }
}

export default App;
