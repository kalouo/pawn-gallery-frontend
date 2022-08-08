import { configureStore } from '@reduxjs/toolkit';
import web3Reducer from './reducers/web3';

export const store = configureStore({
  reducer: {
    web3: web3Reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
