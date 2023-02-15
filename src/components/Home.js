/* eslint-disable react/prop-types */
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Navbar';
import Europe from './Europ';
import CountryList from './CountryList';
import { fetchCountries } from '../Redux/countries';

const Home = () => {
  const { countries } = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, []);
  return (
    <div className="homeScreen">
      <Navbar />
      <Europe />
      <CountryList data={countries} />
    </div>
  );
};

export default Home;
