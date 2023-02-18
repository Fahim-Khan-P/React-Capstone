/* eslint-disable react/prop-types */
import React from 'react';
import Europ from '../assets/Europ.png';

const Europe = () => (
  <div className="europeMainDiv">
    <div className="imageDiv">
      <img className="europeImage" src={Europ} alt="Europe" />
    </div>
    <div className="europeDatialsDiv">
      <h1 className="euroh2eTitle">
        Europe
      </h1>
      <p className="europePopulation">746.4 Million</p>
    </div>
  </div>
);

export default Europe;
