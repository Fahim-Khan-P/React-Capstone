/* eslint-disable react/prop-types */
import React from 'react';

const CountryCard = ({
  id, name, population, flag,
}) => (
  <div className="countryMainDiv" id={id}>
    <div className="countryTopDiv">
      <i className="fa-regular fa-circle-right cardIcon" />
      <img className="countryFlag" src={flag} alt={name} />
    </div>
    <div className="countryBottomDiv">
      <p className="countryName">{name}</p>
      <p className="countryPopulation">{population}</p>
    </div>
  </div>
);

export default CountryCard;
