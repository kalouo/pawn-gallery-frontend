import { createContext, useContext } from 'react';
import { TezosToolkit } from '@taquito/taquito';
import { BeaconWallet } from '@taquito/beacon-wallet';

interface Currency {
  name: string;
  symbol: string;
  decimals: number;
  address: string;
}

export interface Contracts {
  loanCore: string;
}

interface State {
  tezos?: TezosToolkit;
  wallet?: BeaconWallet;
  contracts?: Contracts;
  currencies?: Currency[];
}

export const TezosContext = createContext<State>({});
export const useTezosContext = (): State => useContext(TezosContext);
