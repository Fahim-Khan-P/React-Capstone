/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://restcountries.com/v3.1/region/europe';

export const fetchCountries = createAsyncThunk(
  'fetchCountries',
  async () => {
    const res = await axios.get(URL);
    console.log(res.data);
    return res;
  },
);

const initialState = {
  countries: [],
  loading: 'idle',
};

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.countries = action.payload.data;
      state.loading = 'fulfiled';
    });
  },
});

export default countriesSlice;
