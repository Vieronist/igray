import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ISteam } from './types';

export const getPrice = createAsyncThunk('steamSlice/getPrice', async (data: any) => {
  const response = await axios.post('https://igraicrm.tw1.ru/steam/top-up-steam', data);
  return response.data;
});

export const getCurrency = createAsyncThunk('steamSlice/getCurrency', async () => {
  const response = await axios.get('https://igraicrm.tw1.ru/steam/get-currency');
  return response.data;
});

export const getDeposit = createAsyncThunk('steamSlice/getDeposit', async () => {
  const response = await axios.get('https://igraicrm.tw1.ru/steam/get-deposit');
  return response.data;
});

const initialState: ISteam = {
  data: null,
  deposit: null,
  error: false,
  loading: false,
  success: false
};

const steamSlice = createSlice({
  name: 'steamSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPrice.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getPrice.fulfilled, (state, action) => {
        if (action.payload.error) {
          state.error = true;
        }else {
          state.success = true
        }
        state.loading = false;
      })
      .addCase(getPrice.rejected, (state) => {
        state.error = true;
        state.loading = false;
        state.success = false
      })
      .addCase(getCurrency.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCurrency.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = false;
  
      })
      .addCase(getCurrency.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(getDeposit.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDeposit.fulfilled, (state, action) => {
        state.deposit = action.payload[0];
        state.loading = false;
      })
      .addCase(getDeposit.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export default steamSlice.reducer;
