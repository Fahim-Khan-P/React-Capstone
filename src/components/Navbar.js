/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ country }) => (
  <div className="navBar">
    {country && (
      <div className="navbarBack">
        <Link to="/">
          <i className="fa-solid fa-chevron-left" />
          Back
        </Link>
      </div>
    )}
    <div className="navbarHeader">
      {country ? `Countries/${country}` : 'Europian Countries'}
    </div>
    <div className="navbarRight">
      <i className="fa-solid fa-microphone" />
      <i className="fa-solid fa-gear" />
    </div>
  </div>
);

export default Navbar;
