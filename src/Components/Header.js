// Header.js

import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

function Header() {
  return (
    <header>
      <Link className="logo" to="/">
        Byun's Blog
      </Link>
      <nav className="nav">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
