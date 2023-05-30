import React from 'react';
import github_icon from '../images/github-mark.svg';
import web_icon from '../images/web_link.svg';

/* this component is the animated flipbook that holds the porfolio 'pages' */
export default function PortfolioBook({ bookBody }) {
  let [currentPage, setCurrentPage] = React.useState(1);

  const toggleClass = (e, toggleClassName) => {
    if (e.className) {
      console.log(e.className);
      if (e.className.includes(toggleClassName)) {
        e.className = e.className.replace(' ' + toggleClassName, '');
      } else {
        e.className += ' ' + toggleClassName;
      }
    }
  };

  const movePage = (e, page) => {
    let eT = e.target;

    if (eT.className.substring(0, 4) === 'page') {
      if (page === currentPage) {
        setCurrentPage(() => (currentPage += 2));
        toggleClass(eT, 'left-side');
        toggleClass(eT.nextElementSibling, 'left-side');
      } else if ((page = currentPage - 1)) {
        setCurrentPage(() => (currentPage -= 2));
        toggleClass(eT, 'left-side');
        toggleClass(eT.previousElementSibling, 'left-side');
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
        <span className="page cover-front" onClick={(e) => movePage(e, 1)}>
          <h1>{bookBody.title}</h1>
        </span>

        <span
          className="page cover-front"
          onClick={(e) => movePage(e, 2)}
        ></span>

        {bookBody.pages.map((el, idx) => {
          console.log('github_icon:', github_icon);
          return (
            <span
              className="page text-page"
              onClick={(e) => movePage(e, idx + 3)}
              key={`pfb-sp-${idx}`}
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
