/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ country }) => (
  <div className="navBar">
    <div className="navbarLeftDiv">
      <Link to="/">
        <i className="fa-solid fa-chevron-left" />
      </Link>
    </div>
    <h3 className="navbar-middle">
      {country ? `Countries/${country}` : 'Europian Countries'}
    </h3>
    <div className="navbarRightDiv">
      <i className="fa-solid fa-microphone" />
      <i className="fa-solid fa-gear" />
    </div>
  </div>
);

export default Navbar;
