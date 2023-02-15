/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navBar">
    <div className="navbar-right">
      <i className="fa-solid fa-chevron-left" />
      <Link to="/">
        Back
      </Link>
    </div>
    <div className="navbar-middle">
      Europian Countries
    </div>
    <div className="navbar-left">
      <i className="fa-solid fa-microphone" />
      <i className="fa-solid fa-gear" />
    </div>
  </div>
);

export default Navbar;
