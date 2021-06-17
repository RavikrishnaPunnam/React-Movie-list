import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">Movies WatchList</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">Movie Watch List</Link>
            </li>

            <li>
              <Link to="/watched">Movies Watched</Link>
            </li>

            <li>
              <Link to="/add" className="btn btn-main">
                All Movies
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
