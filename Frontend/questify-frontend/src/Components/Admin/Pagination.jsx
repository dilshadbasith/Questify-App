import React from "react";
import "../css/Pagination.css";

function Pagination({ totalUsers, usersperpage, setCurrentpage, currentpage }) {
  let pages = [];
//   console.log(totalUsers, usersperpage);
  //console.log(pages)

  for (let i = 1; i <= Math.ceil(totalUsers / usersperpage); i++) {
    pages.push(i);
  }
  return (
    <div className="pagination">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentpage(page)}
            className={page == currentpage ? "active" : ""}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}

export default Pagination;
