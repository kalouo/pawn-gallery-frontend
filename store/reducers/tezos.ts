import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'store';

interface TezosState {
  address?: string;
}

const initialState: TezosState = {};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
});

export const setAddress = (state: TezosState, action: PayloadAction<string>) => {
  state.address = action.payload;
};

export const selectAddress = (state: RootState) => {
  return state.tezos.address;
};

export default counterSlice.reducer;
