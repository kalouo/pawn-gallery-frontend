import { TezosToolkit } from '@taquito/taquito';
import { Contracts } from 'contexts/tezos/types';
import { address, int, nat } from 'types/type-aliases';

export interface IRequestService {
  getLiveRequests(args: { tezos: TezosToolkit; contracts: Contracts }): Promise<{
    data: {
      requestId: number;
      imageUrl: string;
      collateralName: string;
      platformName: string;
      loanAmount: string;
      loanCurrency: string;
      loanDurationDays: string;
      interestAmount: string;
    }[];
    isLoading: boolean;
    isError: Error | null;
  }>;

  getRequestById(args: { tezos: TezosToolkit; contracts: Contracts; requestId: nat }): Promise<{
    data: {
      collateralContract: address;
      collateralTokenId: nat;
      borrower: address;
      interestAmount: nat;
      loanDenominationContract: address;
      loanDenominationTokenId: nat;
      loanDuration: int;
      loanPrincipalAmount: nat;
      imageUrl: string;
      collateralName: string;
      platformName: string;
      loanCurrency: string;
    };
    isLoading: boolean;
    isError: Error | null;
  }>;
}