import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './Navbar';
import Europe from './Europ';
import { fetchCountry } from '../Redux/country';

const Details = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const country = useSelector((state) => state.country.country);
  console.log(country, 'country');
  useEffect(() => {
    dispatch(fetchCountry(state.capital));
  }, []);

  if (country[0].capital) {
    return (
      <div className="detailsMainDiv">
        <Navbar country={country[0].name.common} />
        <Europe flag={country[0].flags.png} title={country[0].name.common} />

        <div className="countryInformationDiv">
          <h3>Country Information</h3>
          <div>
            <p>Area</p>
            <p>{country[0].area}</p>
          </div>
          <div>
            <p>Latitude</p>
            <p>{country[0].latlng[0]}</p>
          </div>
          <div>
            <p>Time Zone</p>
            <p>{country[0].timezones[0]}</p>
          </div>
          <div>
            <p>Longitude</p>
            <p>{country[0].latlng[1]}</p>
          </div>
          <div>
            <p>Capital Latitude</p>
            <p>{country[0].capitalInfo.latlng[0]}</p>
          </div>
          <div>
            <p>Capital Longitude</p>
            <p>{country[0].capitalInfo.latlng[1]}</p>
          </div>
        </div>
      </div>
    );
    // eslint-disable-next-line no-else-return
  } else {
    return (
      <div style={{
        height: '100vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
      >
        <h1>Loading</h1>
      </div>
    );
  }
};

export default Details;
