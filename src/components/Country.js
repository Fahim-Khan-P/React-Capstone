import React from 'react';

const countryCard = ({ population, name, flag }) => (
  <div className="one-country">
    <div>
      <img src={flag} alt="Flag" />
    </div>
    <div>
      <h3>{name}</h3>
      <h4>{population}</h4>
    </div>
  </div>
);

export default countryCard;
