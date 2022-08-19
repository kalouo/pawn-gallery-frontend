import { createContext, useContext } from 'react';

interface State {
  loanCore?: string;
}

export const PawnContractsContext = createContext<State>({});
export const usePawnContractsContext = (): State => useContext(PawnContractsContext);
