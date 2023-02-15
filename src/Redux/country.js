/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const FETCHCONUTRY = 'fetchCountry';

const URL = 'https://restcountries.com/v3.1/capital';

export const fetchCountry = createAsyncThunk(
  FETCHCONUTRY,
  async (name) => {
    const res = await axios.get(`${URL}/${name}`);
    console.log(res);
    return res.data;
  },
);

const initialState = {
  country: [],
  loading: 'idle',
};

export const countrySlice = createSlice({
  name: 'country',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCountry.fulfilled, (state,action) => {
      state.country = action.payload;
      console.log(action.payload);
      state.loading = 'fulfilled';
    });
  },
});

export default countrySlice.reducer;
