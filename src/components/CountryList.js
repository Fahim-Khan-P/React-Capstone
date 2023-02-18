/* eslint-disable no-else-return */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CountryCard from './Country';
import { fetchCountries, searchCountry } from '../Redux/countries';

const CountryList = ({ data }) => {
  const [searchValue, setSearchValue] = useState();
  const dispatch = useDispatch();

  const searchCountries = (name) => {
    if (searchValue === '') {
      dispatch(fetchCountries());
    } else {
      dispatch(searchCountry(name));
    }
  };

  const setValueAndSearch = (name) => {
    setSearchValue(name);
    setTimeout(() => {
      if (name === '') {
        dispatch(fetchCountries());
      } else {
        dispatch(searchCountry(name));
      }
    }, 500);
  };

  if (data.length > 0) {
    return (
      <div className="CountryListMainDiv">
        <div className="searchContainer">
          <input className="searchInput" type="text" value={searchValue} placeholder="Search a country" onChange={(e) => setValueAndSearch(e.target.value)} />
          <button className="searchBtn" type="button" onClick={() => searchCountries(searchValue)}>
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
              state={{ capital: country.capital }}
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
  } else {
    return (
      <h1> Loading</h1>
    );
  }
};

export default CountryList;
