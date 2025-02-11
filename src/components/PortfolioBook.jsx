import React, { useEffect } from 'react';
import github_icon from '../images/github-mark.svg';
import web_icon from '../images/web_link.svg';

/* this component is the animated flipbook that holds the porfolio 'pages' */
export default function PortfolioBook({ bookBody }) {
  let [currentPage, setCurrentPage] = React.useState(1);
  let numPages = bookBody.pages.length + 2; // adding 2 pages for the front cover + inner left cover
  // let [extraClasses, setExtraClasses] = React.useState();

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 37) {
        // left arrow press
        handleLeftArrowPress();
      } else if (event.keyCode === 39) {
        // right arrow press
        handleRightArrowPress();
      }
    };

    const handleLeftArrowPress = () => {
      console.log('left!');
    };

    const handleRightArrowPress = () => {
      console.log('right!');
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const toggleClass = (e, toggleClassName) => {
    if (e.className) {
      if (e.className.includes(toggleClassName)) {
        e.className = e.className.replace(' ' + toggleClassName, '');
      } else {
        e.className += ' ' + toggleClassName;
      }
    }
  };

  // handle page/arrow clicks to move pages of the book
  const movePage = (e, page, pageLimit) => {
    let eT = e.target;

    // only allow clicks up until the last page!
    if (page < pageLimit) {
      if (eT.className.substring(0, 5) === 'page ') {
        // clicked the right-hand side page
        if (page === currentPage) {
          setCurrentPage(() => (currentPage += 2));
          toggleClass(eT, 'left-side');
          toggleClass(eT.nextElementSibling, 'left-side');
          // clicked the left-hand side page
        } else if (page === currentPage - 1) {
          setCurrentPage(() => (currentPage -= 2));
          toggleClass(eT, 'left-side');
          toggleClass(eT.previousElementSibling, 'left-side');
        }
      }
    }
  };

  const movePage2 = (page, pageLimit) => {
    if (page < pageLimit) {
      // clicked the right-hand side page
      if (page === currentPage) {
        setCurrentPage(() => (currentPage += 2));
        // clicked the left-hand side page
      } else if (page === currentPage - 1) {
        setCurrentPage(() => (currentPage -= 2));
      }
    }
  };

  const rows = [];
  for (let i = 0; i < 40; i++) {
    rows.push(<span className="page" key={`pfb-page-${i}`}></span>);
  }

  return (
    <>
      <span className="book">
        <span
          className="page cover-front"
          onClick={(e) => movePage(e, 1, numPages)}
          key={`pfb-sp-1`}
        >
          <h1>{bookBody.title}</h1>
        </span>

        <span
          className="page cover-front"
          onClick={(e) => movePage(e, 2, numPages)}
          key={`pfb-sp-2`}
        ></span>

        {bookBody.pages.map((el, idx) => {
          return (
            <span
              className="page text-page"
              onClick={(e) => movePage(e, idx + 3, numPages)}
              key={`pfb-sp-${idx + 3}`}
            >
              <h1>{el.page_title}</h1>
              <p>{el.desc}</p>
              <p className="page-links">
                {el.link && (
                  <p>
                    <a href={el.link} target="_blank" rel="noreferrer">
                      <img src={web_icon} className="github_link" alt="Demo" />
                    </a>
                  </p>
                )}

                {el.github_link && (
                  <p>
                    <a href={el.github_link} target="_blank" rel="noreferrer">
                      <img
                        src={github_icon}
                        className="github_link"
                        alt="GitHub"
                      />
                    </a>
                  </p>
                )}
              </p>
            </span>
          );
        })}
        {rows}
      </span>
    </>
  );
}
