import { configureStore } from '@reduxjs/toolkit';
import orderSlice from '../slices/order/orderSlice';
import profileSlice from '../slices/profile/profileSlice';
import steamSlice from '../slices/steam/steamSlice';

const store = configureStore({
  reducer: {
    profile: profileSlice,
    order: orderSlice,
    steam: steamSlice,
  },
});

export default store;
