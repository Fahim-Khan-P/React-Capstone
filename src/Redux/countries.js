/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://restcountries.com/v3.1/region/europe';
const searchUrl = 'https://restcountries.com/v3.1/name/';

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
  async (name) => {
    try {
      const response = axios.get(`${searchUrl}${name}`);
      console.log(response);
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

    builder.addCase(searchCountry.fulfilled, (state, action) => {
      console.log(action);
      state.countries = action.payload.data.slice(0, 10);
    });
  },
});
export default homeSlice.reducer;
