import React from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {

  return (
    <div className="pagination">
        <button
          onClick={() => {
            if (currentPage > 1) {
              onPageChange(currentPage - 1);
            }
          }}
        >
          {"<"}
        </button>
        <button>{currentPage}</button>
        <button
          onClick={() => {
            if (currentPage < totalPages) {
              onPageChange(currentPage + 1);
            }
          }}
        >
          {">"}
        </button>
    </div>
  );
};

export default Pagination;
