"use client";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navigation">
        <div className="container">
          <ul>
            <li>
              <Link to="/All-laptops">all laptops</Link>
            </li>
            <li>
              <Link to="/accessories">Accessories</Link>
            </li>
            <li>
              <Link to="/services">services</Link>
            </li>
            <li>
              <Link to="/support">support</Link>
            </li>
            <li>
              <Link to="/find-store">find a store</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
