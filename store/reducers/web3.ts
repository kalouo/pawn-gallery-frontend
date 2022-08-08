import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'store';

interface Web3State {
  address?: string;
}

const initialState: Web3State = {};

export const counterSlice = createSlice({
  name: 'web3',
  initialState,
  reducers: {},
});

export const setAddress = (state: Web3State, action: PayloadAction<string>) => {
  state.address = action.payload;
};

export const selectAddress = (state: RootState) => {
  return state.web3.address;
};

export default counterSlice.reducer;
