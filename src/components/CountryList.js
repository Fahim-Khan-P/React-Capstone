/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import CountryCard from './Country';

const CountryList = ({ data }) => (
  <div className="CountryListMainDiv">
    <div className="CountryListTitle">List of Urope Countries</div>
    <div className="CountryList">
      {data.map((country) => (

        <Link
          key={country.ccn3}
          to={`details:${country.name.common}`}
          state={{ capital: country.capital[0] }}
        >
          <CountryCard
            key={country.ccn3}
            name={country.name.common}
            population={country.population}
            flag={country.flags.png}
          />
        </Link>

      ))}
    </div>
  </div>
);

export default CountryList;
