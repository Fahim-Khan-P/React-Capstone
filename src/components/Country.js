import React from 'react';

const countryCard = ({ region, name, flag }) => (
  <div className="one-country">
    <div>
      <img className="flag" src={flag} alt="Flag" />
    </div>
    <div className="countryCardDetails">
      <h3>{name}</h3>
      <h4>{region}</h4>
    </div>
  </div>
);

export default countryCard;
