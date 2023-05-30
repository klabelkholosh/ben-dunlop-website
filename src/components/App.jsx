/* React Components */
import React from 'react';

/* My Components */
import NavBar from './NavBar';
import MainScreen from './MainScreen';

export default function App() {
  const [showScroller, setShowScroller] = React.useState(false);

  // every 3 seconds, fire the scroller switch
  React.useEffect(() => {
    setInterval(switchScroller, 3000);
  }, []);

  // either shows or hide the scroller
  const switchScroller = () => {
    setShowScroller((prevState) => !prevState);
  };

  return (
    <div className="appDiv" id="appDiv">
      <NavBar id="NavBar" showScroller={showScroller} logoHeight={'100vh'} />
      <MainScreen id="MainScreen" />
    </div>
  );
}
