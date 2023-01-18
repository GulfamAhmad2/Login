import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo">
            <Link to="/" className="logo-link">Kreativ</Link>
          </div>
          <div className="nav-menu">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link">Contact</Link>
                </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
