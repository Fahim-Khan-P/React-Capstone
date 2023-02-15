/* eslint-disable react/prop-types */
import React from 'react';
import Europ from '../assets/Europ.png';

const Europe = ({ population, title = 'Europe' }) => (
  <div className="europeMainDiv">
    <div className="imageDiv">
      <img className="europeImage" src={Europ} alt={Europe} />
    </div>
    <div className="europeDatialsDiv">
      <p className="europeTitle">
        {
          title
          }
      </p>
      <p className="europePopulation">{ population }</p>
    </div>
  </div>
);

export default Europe;