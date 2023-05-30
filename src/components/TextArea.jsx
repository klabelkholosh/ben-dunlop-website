import React from 'react';
import PortfolioBook from './PortfolioBook.jsx';

/* 3rd-party Components */
import Linkify from 'react-linkify';

//this function accepts an array of text strings, which is uses to create an unordered list.
//also uses Linkify to render any URLs as clickable. (would be nice if they opened in a new window..)
export default function TextArea({
  liText = `Here's some default text for the text area. Feel free to define some of your own :)`,
  fontSize = '16',
  type = 'basic',
}) {
  const fSizeStyle = {
    fontSize: `${fontSize}px`,
  };

  return type === 'flipbook' ? (
    <PortfolioBook bookBody={liText} />
  ) : (
    <div className="textArea">
      <Linkify target="_blank">
        <ul>
          {liText.map((liItem, key) => {
            return key === 0 ? (
              <h1 key={liItem}>{liItem}</h1>
            ) : (
              <li key={liItem} style={fSizeStyle}>
                {liItem}
              </li>
            );
          })}
        </ul>
      </Linkify>
    </div>
  );
}
