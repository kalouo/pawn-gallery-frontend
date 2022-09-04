import Teztok from 'graphql/teztok';

export const useHoldings = (address: string) => {
  return Teztok.getHoldings(address);
};
