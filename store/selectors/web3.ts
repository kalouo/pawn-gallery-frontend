import { RootState } from 'store';

export const selectWeb3 = (state: RootState) => {
  return state.web3;
};
