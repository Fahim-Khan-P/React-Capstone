import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countries';
import countryReducer from './country';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    country: countryReducer,
  },
});

export default store;
