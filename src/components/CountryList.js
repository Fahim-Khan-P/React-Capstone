/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CountryCard from './Country';
import { searchCountry } from '../Redux/countries';

const CountryList = ({ data }) => {
  const [searchValue, setSearchValue] = useState();
  const dispatch = useDispatch();
  return (
    <div className="CountryListMainDiv">
      <div className="searchContainer">
        <input className="searchInput" type="text" value={searchValue} placeholder="Search a country" onChange={(e) => setSearchValue(e.target.value)} />
        <button type="button" onClick={dispatch(searchCountry)}>
          Search
        </button>
      </div>
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
};

export default CountryList;
