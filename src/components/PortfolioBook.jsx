import React, { useCallback, useEffect, useRef, useState } from 'react';
import github_icon from '../images/github-mark.svg';
import web_icon from '../images/web_link.svg';

export default function PortfolioBook({ bookBody }) {
  const [currentPage, setCurrentPage] = useState(1);
  const numPages = bookBody.pages.length + 2; // front + inner left
  const bookRef = useRef(null);
  const pageRefs = useRef([]);

  const flipPage = useCallback(
    (direction) => {
      if (direction === 'right' && currentPage < numPages - 1) {
        setCurrentPage((prev) => prev + 2);
      } else if (direction === 'left' && currentPage > 1) {
        setCurrentPage((prev) => prev - 2);
      }
    },
    [currentPage, numPages]
  );

  // Handle arrow keys
  useEffect(() => {
    // Reset all pages
    pageRefs.current.forEach((el) => el?.classList.remove('left-side'));

    // Mark all flipped pages
    for (let i = 0; i < currentPage - 1; i++) {
      pageRefs.current[i]?.classList.add('left-side');
    }

    const handleKeyPress = (event) => {
      if (event.key === 'ArrowLeft') {
        flipPage('left');
      } else if (event.key === 'ArrowRight') {
        flipPage('right');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentPage, flipPage]);

  // Attach click handlers that use same flip logic
  const handlePageClick = (pageIndex) => {
    if (pageIndex === currentPage) flipPage('right');
    else if (pageIndex === currentPage - 1) flipPage('left');
  };

  // Create empty filler pages for depth effect
  const fillerPages = Array.from({ length: 40 }, (_, i) => (
    <span
      className="page"
      key={`pfb-filler-${i}`}
      ref={(el) => (pageRefs.current[numPages + i] = el)}
    />
  ));

  return (
    <span className="book" ref={bookRef} tabIndex={0}>
      {/* Front cover */}
      <span
        className="page cover-front"
        onClick={() => handlePageClick(1)}
        ref={(el) => (pageRefs.current[0] = el)}
      >
        <h1>{bookBody.title}</h1>
      </span>

      {/* Inner cover */}
      <span
        className="page cover-front"
        onClick={() => handlePageClick(2)}
        ref={(el) => (pageRefs.current[1] = el)}
      ></span>

      {/* Content pages */}
      {bookBody.pages.map((el, idx) => (
        <span
          className="page text-page"
          key={`pfb-page-${idx}`}
          onClick={() => handlePageClick(idx + 3)}
          ref={(el) => (pageRefs.current[idx + 2] = el)}
        >
          <h1>{el.page_title}</h1>
          <p>{el.desc}</p>
          <p className="page-links">
            {el.link && (
              <a href={el.link} target="_blank" rel="noreferrer">
                <img src={web_icon} className="github_link" alt="Demo" />
              </a>
            )}
            {el.github_link && (
              <a href={el.github_link} target="_blank" rel="noreferrer">
                <img src={github_icon} className="github_link" alt="GitHub" />
              </a>
            )}
          </p>
        </span>
      ))}

      {fillerPages}
    </span>
  );
}
