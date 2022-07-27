import { createContext, useContext } from 'react';

import { GraphQLClient } from 'graphql-hooks';

interface State {
  client?: GraphQLClient;
}

export const TeztokContext = createContext<State>({});
export const useTeztokContext = (): State => useContext(TeztokContext);
