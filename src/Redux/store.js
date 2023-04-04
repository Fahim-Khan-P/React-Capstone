import { configureStore } from '@reduxjs/toolkit';

import homeReducers from './countries';
import countryReducer from './country';

const store = configureStore({
  reducer: {
    countries: homeReducers,
    country: countryReducer,
  },
});

export default store;
