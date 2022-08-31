import { createContext, useContext } from 'react';
import { TezosToolkit } from '@taquito/taquito';
import { BeaconWallet } from '@taquito/beacon-wallet';
import { Contracts, Currency } from './types';

interface State {
  tezos?: TezosToolkit;
  wallet?: BeaconWallet;
  contracts?: Contracts;
  currencies?: Currency[];
}

export const TezosContext = createContext<State>({});
export const useTezosContext = (): State => useContext(TezosContext);
