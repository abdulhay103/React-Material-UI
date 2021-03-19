import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul className="nav-items">
      <li>
        <Link to="/">Typography</Link>
      </li>
      <li>
        <Link to="/button-ui">Button</Link>
      </li>
    </ul>
  );
};

export default Navbar;
