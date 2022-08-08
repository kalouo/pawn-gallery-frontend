import { configureStore } from '@reduxjs/toolkit';
import tezosReducer from './reducers/tezos';

export const store = configureStore({
  reducer: {
    tezos: tezosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
