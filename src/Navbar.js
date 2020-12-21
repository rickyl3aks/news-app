import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <ul className="navbar">
        <li>
          <Link to="/">
            Website still under construction 🚨 sorry for any inconvenience
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
