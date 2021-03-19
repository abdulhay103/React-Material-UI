import React from "react";
import { Link } from "react-router-dom";
import "./NavStyle.css";

const Navbar = () => {
  return (
    <div>
      <ul className="nav-items">
        <li>
          <Link to="/">Notes</Link>
        </li>
        <li>
          <Link to="/create">Create</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
