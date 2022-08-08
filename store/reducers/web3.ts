import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'store';

interface Web3State {
  address?: string;
}

const initialState: Web3State = {};

export const web3Slice = createSlice({
  name: 'web3',
  initialState,
  reducers: {
    setAddress: (state: Web3State, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
  },
});

export const { setAddress } = web3Slice.actions;

export default web3Slice.reducer;
