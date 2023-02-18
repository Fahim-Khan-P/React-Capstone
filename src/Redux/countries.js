/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://restcountries.com/v3.1/region/europe';

export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async () => {
    try {
      const response = axios.get(URL);
      return response;
    } catch (error) {
      return error;
    }
  },
);

export const searchCountry = createAsyncThunk(
  'countries/searchCountry',
  async () => {
    try {
      const response = axios.get(URL);
      return response;
    } catch (error) {
      return error;
    }
  },
);

const initialState = {
  countries: [],
  loading: 'idle',
};

export const homeSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.countries = action.payload.data;
      state.loading = 'fulfiled';
    });
  },
});

export default homeSlice.reducer;
