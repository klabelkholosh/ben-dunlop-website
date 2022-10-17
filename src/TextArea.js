import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* 3rd-party Components */
import Linkify from 'react-linkify';

//this class accepts an array of text strings, which is uses to create an unordered list.
//also uses Linkify to render any URLs as clickable. (would be nice if they opened in a new window..)
class TextArea extends Component {
  render() {
    let { liText, fontSize } = this.props;
    const fSizeStyle = {
      fontSize: `${fontSize}px`,
    };
    return (
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
}

TextArea.propTypes = {
  liText: PropTypes.array.isRequired,
  fontSize: PropTypes.string,
};

TextArea.defaultProps = {
  liText: [
    `Here's some default text for the text area. Feel free to define some of your own :)`,
  ],
  fontSize: '16',
};

export default TextArea;
