/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import CountryCard from './Country';

const CountryList = ({ data }) => (
  <div className="CountryListMainDiv">
    <h2 className="CountryListTitle">List of Urope Countries</h2>
    <div className="CountryList">
      {data.map((country) => (

        <Link
          className="link"
          key={country.ccn3}
          to={`details:${country.name.common}`}
          state={{ capital: country.capital[0] }}
        >
          <CountryCard
            region={country.subregion}
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
