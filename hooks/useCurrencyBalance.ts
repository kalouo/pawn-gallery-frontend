import { TezosToolkit } from '@taquito/taquito';
import useSWR from 'swr';

import { address, nat } from 'types/type-aliases';
import CurrencyService from 'token-service/currency';

export const useCurrencyBalance = ({
  tezos,
  holderAddress,
  assetContract,
  assetTokenId,
}: {
  tezos: TezosToolkit;
  assetContract: address;
  assetTokenId: nat;
  holderAddress: string;
}) => {
  return useSWR(
    [{ tezos, holderAddress, assetContract, assetTokenId }],
    new CurrencyService(assetContract).getBalance
  );
};
