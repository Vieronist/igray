import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICreateOrderValues } from '@/shared/types';
import { OrderData, orderData } from './types';

export const createOrder = createAsyncThunk('orderSlice/createOrder', async (formData: unknown) => {
  const response = await axios.post('https://igraicrm.tw1.ru/orders/create-order', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
});

export const getOrders = createAsyncThunk('orderSlice/getOrders', async (status: any) => {
  const response = await axios.post('https://igraicrm.tw1.ru/orders/get-orders-by-status', status);
  return response.data
});

export const getPrice = createAsyncThunk('orderSlice/getPrice', async () => {
  const response = await axios.get('https://igraicrm.tw1.ru/orders/get-price');
  return response.data;
});

export const acceptOrder = createAsyncThunk('orderSlice/acceptOrder', async (data: OrderData) => {
  const response = await axios.post('https://igraicrm.tw1.ru/orders/accept-order', data);
  return response.data;
});

export const reportOrder = createAsyncThunk('orderSlice/reportOrder', async (data: unknown) => {
  const response = await axios.post('https://igraicrm.tw1.ru/orders/report-order', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
});

export const downloadScreenOrder = createAsyncThunk(
  'orderSlice/downloadScreenOrder',
  async (data: { order_id: number }) => {
    const response = await axios.post('https://igraicrm.tw1.ru/orders/download', data);
    return response.data;
  }
);

export const sendOrder = createAsyncThunk('orderSlice/sendOrder', async (formData: unknown) => {
  const response = await axios.post('https://igraicrm.tw1.ru/orders/send-order', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
});

export const getImgOrder = createAsyncThunk(
  'orderSlice/getImgOrder',
  async (data: { order_id: number }) => {
    const response = await axios.post('https://igraicrm.tw1.ru/orders/get-images', data);
    return response.data;
  }
);

export const deleteOrder = createAsyncThunk(
  'orderSlice/sendOrder',
  async (data: { order_id: number }) => {
    const response = await axios.post('https://igraicrm.tw1.ru/orders/delete', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  }
);

export const getAmount = createAsyncThunk('orderSlice/getAmount', async () => {
  const response = await axios.get('https://igraicrm.tw1.ru/orders/get-amount');
  return response.data;
});

export const editOrders = createAsyncThunk(
  'orderSlice/editOrders',
  async (orderData: ICreateOrderValues) => {
    const response = await axios.post('https://igraicrm.tw1.ru/orders/edit-order', orderData);
    return response.data;
  }
);

export const resetPriceActions = createAsyncThunk('orderSlice/resetPrice', async () => {
  const response = await axios.post('https://igraicrm.tw1.ru/orders/reset-counter');
  return response.data;
});

const initialState: orderData = {
  create: {
    data: [],
    loading: false,
    error: false,
  },
  order: {
    data: {
      orders: [],
    },
    accept: [],
    loading: false,
    error: false,
  },
  price: { counter: [], last_update: '' },
  amount: null,
};

const orderSlice = createSlice({
  name: 'orderSlice',
  initialState,
  reducers: {
    resetPrice: (state, action) => {
      state.price.counter = action.payload;
    },
    resetOrderCount: (state, action) => {
      state.amount = action.payload;
    },
    getOrdersWs: (state, action) => {
      state.order.data.orders = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAmount.fulfilled, (state, action) => {
        state.amount = action.payload;
      })
      .addCase(createOrder.pending, (state) => {
        state.create.loading = true;
      })
      .addCase(createOrder.fulfilled, (state) => {
        state.create.loading = false;
      })
      .addCase(createOrder.rejected, (state) => {
        state.create.loading = false;
        state.create.error = true;
      })
      .addCase(getOrders.pending, (state) => {
        state.order.loading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.order.loading = false;
  
        state.order.data = action.payload;
      })
      .addCase(getOrders.rejected, (state) => {
        state.order.loading = false;
        state.order.error = true;
      })
      .addCase(getPrice.fulfilled, (state, action) => {
        state.order.loading = false;
        state.price = action.payload;
      });
  },
});
export const { resetPrice, resetOrderCount, getOrdersWs } = orderSlice.actions;
export default orderSlice.reducer;
