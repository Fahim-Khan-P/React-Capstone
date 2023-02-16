/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://restcountries.com/v3.1/capital';

export const fetchCountry = createAsyncThunk(
  'country/fetchCountry',
  async (name) => {
    console.log(name, 'name');
    try {
      const response = axios.get(`${baseUrl}/${name}`);
      console.log(response, 'response');
      return response;
    } catch (error) {
      return error;
    }
  },
);

const initialState = {
  country: [],
  loading: 'idle',
};

export const homeSlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCountry.fulfilled, (state, action) => {
      state.country = action.payload.data;
      state.loading = 'fulfiled';
    });
  },
});

export default homeSlice.reducer;
