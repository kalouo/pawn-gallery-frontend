import { RootState } from 'store';

export const selectAddress = (state: RootState) => {
  return state.web3.address;
};
