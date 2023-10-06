import React from "react";
import '../compoments-css/pagen.css'

export default function Pagen({ data, currentPage, onPageChange, cardsPerPage }) {
  const totalCards = data.length;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, index) => {
        if (index === 0 || index === currentPage - 1 || index === currentPage || index === currentPage + 1 ) {
          return (
            <button
              key={index + 1}
              className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          );
        }
        return null; // Hide other pages
      })}
    </div>
  );
}
