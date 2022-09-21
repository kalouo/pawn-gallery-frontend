import { TezosToolkit } from '@taquito/taquito';
import Teztok from 'graphql/teztok';
import useSWR from 'swr';

export const useHoldings = (address: string, tezos: TezosToolkit) => {
  return useSWR([{ tezos, address }], Teztok.getHoldings);
};
