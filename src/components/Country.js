import React from 'react';
import { Link } from 'react-router-dom';

const countryCard = ({ id, name, image }) => (
  <div className="one-country">
    <Link
      to={`/country/${name}`}
      key={id}
    >
      <div>
        <img src={image} alt="Flag" />
      </div>
      <div>
        <h3>{name}</h3>
      </div>
    </Link>
  </div>
);

export default countryCard;
