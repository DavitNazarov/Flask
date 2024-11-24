import React from "react";
import { Link } from "react-router-dom";
import routes from "../router/constants/routes";

const NavBar = () => {
  return (
    <nav className="nav">
      <div>
        <h1>TITLE</h1>
      </div>
      <div>
        <ul>
          <li>
            <Link to={routes.home}>Home </Link>
          </li>
          <li>
            <Link to={routes.data}>Data </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
