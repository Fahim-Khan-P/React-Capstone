import React from 'react';

const countryCard = ({
  region, name, flag, population,
}) => (
  <div className="one-country">
    <i className="fa-solid fa-arrow-right countryArrow" />
    <div>
      <img className="flag" src={flag} alt="Flag" />
    </div>
    <div className="countryCardDetails">
      <h3>{name}</h3>
      <h4>{region}</h4>
    </div>
    <h4 className="populationValue">{`${population} People`}</h4>
  </div>
);

export default countryCard;
