import React from 'react';
 import './Pagination.css'
 
export default (props) => (
    <div className="paginator">
    {props.numberOfPages > 1
      ? props.pages.map((n) => (
          <span
            key={n}
            className={
              props.currentPage === n
                ? "selectedPage"
                : "notSelectedPage"
            }
            onClick={props.handleClick}
          >
            {n}{" "}
          </span>
        ))
      : null}
  </div>
)