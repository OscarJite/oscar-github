import React from "react";
import "../../src/index.css"

import {
 FiArrowLeft,
  FiArrowRight,
} from "react-icons/fi";

const Pagination = ({
  apiResult,
  postPerPage,
  currentPage,
  setcurrentPage,
}) => {
  const PaginationNumber = [];

  for (let i = 1; i < Math.ceil(apiResult.length / postPerPage); i++) {
    PaginationNumber.push(i);
  }

  const PageGetUrl = (val) => {
    setcurrentPage(val);
  };

  const PageGetUrlByArrow = (num) => {
    if (num <= PaginationNumber.length && num > 0) {
      setcurrentPage(num);
    } else {
      return;
    }
  };

  return (
    <div className="pagination-flex-box">
      <h2
        style={{ cursor: "pointer" }}
        onClick={() => PageGetUrlByArrow(currentPage - 1)}
      >
        <FiArrowLeft />
      </h2>
      {PaginationNumber.map((data, index) => {
        return (
          <li
            className="pagination-boxes"
            onClick={() => PageGetUrl(data)}
            key={index}
          >
            {data}
          </li>
        );
      })}
      <h2
        style={{ cursor: "pointer" }}
        onClick={() => PageGetUrlByArrow(currentPage + 1)}
      >
        <FiArrowRight />
      </h2>
    </div>
  );
};

export default Pagination;
