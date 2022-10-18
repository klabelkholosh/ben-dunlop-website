/* React Components */
import React, { Component } from 'react';

/* My Components */
import SVGBookcase from './SVGBookcase';
import TextArea from './TextArea';

class MainScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewBoxX: 0,
      viewBoxY: 0,
      viewBoxWidth: 1260,
      viewBoxHeight: 900,
      switchBook: 'default',
      defaultText: [
        `BDESIGN`,
        `Hi! My name is Ben.`,
        `Feel free to check out a book on the shelf.`,
      ],
      book1Text: [
        `ABOUT ME`,
        `My name is Ben Dunlop, and I'm hoping to get into front end.`,
        `I like React, JS and SVGs.`,
        `Node.js is pretty cool too.`,
        `My previous experience is mostly PHP/PostgreSQL.`,
      ],
      book2Text: [
        `PORTFOLIO`,
        `\u2730 Bitcoin Weekly Sentimentalizer. See how Twitter felt about Bitcoin in`,
        ` the last 7 days! https://bitcoin-weekly-sentiment.web.app/`,
        `\u2730 I did 6clocks, a Web3-enabled NFT site, as well as the actual NFT art/design etc.`,
        `as well as the Solidity Ethereum smart contract: https://www.6clocks.wtf/`,
        `\u2730 Here's a Gatsby/GraphQL/Contentful single-page site I did for a payment gateway company`,
        `https://greenpay-gatsby-frontend.vercel.app/`,
        `\u2730 There's the site you're on! It should be both full-page and mobile`,
        ` friendly, it's mostly React and Adobe Illustrator.`,
        `\u2730 Here's something I did for someone, a more traditional site:`,
        `https://printellect-83cd7.firebaseapp.com`,
        `\u2730 Here's a weather app I made in React, using OpenWeatherMap's`,
        ` API: https://weather-app-89a1b.firebaseapp.com/`,
        //`There's also infocus.co.za, it's a fully fledged web-based modular accounting package, done in PHP, MySQL and JQuery. A little older, but still works! Let me know if you need login details.`,
        `More coming soon!`,
      ],
      book3Text: [
        `CONTACT`,
        `Drop me a line!`,
        `https://github.com/klabelkholosh/`,
        `https://www.linkedin.com/in/ben-dunlop-871a9723/`,
        `klabelkholosh <at> gmail <dot> com`,
      ],
    };
  }

  //ensures a SVG has a viewbox at its center
  setSVGViewBoxCenter(docId, scale) {
    const { viewBoxX, viewBoxY, viewBoxWidth, viewBoxHeight } = this.state;

    // the current center of the viewBox
    const cx = viewBoxX + viewBoxWidth / 2;
    const cy = viewBoxY + viewBoxHeight / 2;

    // the corresponding top left corner in the current scale
    const absolute_offset_x = cx;
    const absolute_offset_y = cy;

    // the new scale
    const scaled_width = viewBoxWidth * scale;
    const scaled_height = viewBoxHeight * scale;

    this.setState({
      viewBoxX: absolute_offset_x,
      viewBoxY: absolute_offset_y,
      viewBoxWidth: scaled_width,
      viewBoxHeight: scaled_height,
    });
  }

  componentDidMount() {
    //this.setSVGViewBoxCenter('#bookcase_scene',0.7);
  }

  //what happens when a book is clicked
  handleSelect = (bookId) => {
    this.setState({
      switchBook: bookId,
    });
  };

  render() {
    const {
      viewBoxX,
      viewBoxY,
      viewBoxWidth,
      viewBoxHeight,
      switchBook,
      defaultText,
      book1Text,
      book2Text,
      book3Text,
    } = this.state;

    //book spine colours
    const spineFill = [];
    spineFill.push('#2364aa');
    spineFill.push('#fec601');
    spineFill.push('#ea7317');

    return (
      <div className="mainMenuDiv">
        <SVGBookcase
          viewBoxX={viewBoxX}
          viewBoxY={viewBoxY}
          viewBoxWidth={viewBoxWidth}
          viewBoxHeight={viewBoxHeight}
          spineFill={spineFill}
          onSelect={this.handleSelect}
          switchBook={switchBook}
        />
        {switchBook === 'default' && <TextArea liText={defaultText} />}
        {switchBook === 'book1' && <TextArea liText={book1Text} />}
        {switchBook === 'book2' && (
          <TextArea liText={book2Text} fontSize={'11'} />
        )}
        {switchBook === 'book3' && <TextArea liText={book3Text} />}
      </div>
    );
  }
}

export default MainScreen;
