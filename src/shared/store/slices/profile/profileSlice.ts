import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { IProfile, IUserData, userData } from './types';

export const auth = createAsyncThunk('profileSlice/auth', async (userData: IUserData) => {
  const response = await axios.post('https://igraicrm.tw1.ru/auth/auth', userData);
  return response.data;
});

export const getMe = createAsyncThunk('profileSlice/getMe', async (userData: IUserData) => {
  const { login } = userData;
  const response = await axios.post('https://igraicrm.tw1.ru/auth/get-me', { login });
  return response.data;
});

export const deleteUser = createAsyncThunk('profileSlice/deleteUser', async (login: string) => {
  const response = await axios.post('https://igraicrm.tw1.ru/users/delete-user', { login });
  return response.data;
});

export const addUser = createAsyncThunk('profileSlice/addUser', async (userData: userData) => {
  const response = await axios.put('https://igraicrm.tw1.ru/users/add-user', userData);
  return response.data;
});

export const getUsers = createAsyncThunk('profileSlice/getUsers', async () => {
  const response = await axios.get('https://igraicrm.tw1.ru/users/get-users');
  return response.data;
});

const initialState: IProfile = {
  userData: {
    data: {
      login: '',
      role: null,
    },
    loading: false,
    error: false,
  },
  userList: {
    data: [],
    loading: false,
    error: false,
  },
  createUser: {
    loading: false,
    error: false,
  },
};

const profileSlice = createSlice({
  name: 'profileSlice',
  initialState,
  reducers: {
    removeUser: (state) => {
      localStorage.removeItem('login');
      state.userData.data.role = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMe.pending, (state) => {
        state.userData.loading = true;
      })
      .addCase(getMe.fulfilled, (state, action) => {
        state.userData.loading = false;
        state.userData.data.login = action.payload.login;
        state.userData.data.role = action.payload.role;
        localStorage.setItem('login', action.payload.login);
      })
      .addCase(getMe.rejected, (state) => {
        state.userData.loading = false;
      })
      .addCase(addUser.pending, (state) => {
        state.createUser.loading = true;
      })
      .addCase(addUser.fulfilled, (state) => {
        state.createUser.loading = false;
      })
      .addCase(addUser.rejected, (state) => {
        state.createUser.loading = false;
        state.createUser.error = true;
      })
      .addCase(getUsers.pending, (state) => {
        state.userList.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.userList.data = action.payload.users;
        state.userList.loading = false;
      })
      .addCase(getUsers.rejected, (state) => {
        state.userList.error = true;
        state.userList.loading = false;
      });
  },
});

export const { removeUser } = profileSlice.actions;
export default profileSlice.reducer;
