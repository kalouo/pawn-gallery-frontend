import { Collateral, Holding } from 'graphql/teztok/types';

export interface Client {
  getHoldings(address: string): {
    data: Holding[] | undefined;
    isLoading: boolean;
    isError: Error | null;
  };

  getCollateral(
    tokenAddress: string,
    tokenId: string
  ): {
    data: Collateral | undefined;
    isLoading: boolean;
    isError: Error | null;
  };
}
