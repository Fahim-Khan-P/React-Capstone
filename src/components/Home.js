/* eslint-disable react/prop-types */
import React from 'react';

const Home = ({
  color, name, population, flag,
}) => (
  <div className={`homeCard ${color[0]}`}>
    <div className="homeCardTop">
      <i className="fa-regular fa-circle-right cardIcon" />
      <img className="homeCardTopImg" src={flag} alt={name} />
    </div>
    <div className="homeCardBottom">
      <p className="homeCardTitle">{name}</p>
      <p className="homeCardNumber">{`${Math.round(population / 1000000)} M`}</p>
    </div>
  </div>
);

export default Home;
