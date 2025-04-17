import store from '@/shared/store/stores';

export type roles = 'admin' | 'manager' | 'worker';
export interface LoadingErrorState {
  loading: boolean;
  error: boolean;
}

export type userData = {
  login: string;
  role: roles | null;
  password?: string | null;
};
export interface IProfile {
  userData: {
    data: userData;
  } & LoadingErrorState;
  userList: {
    data: userData[];
  } & LoadingErrorState;
  createUser: LoadingErrorState;
}

export interface IUserData {
  login: string;
  password: string;
}

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
