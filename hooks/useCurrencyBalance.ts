import { TezosToolkit } from '@taquito/taquito';
import useSWR from 'swr';

import { address, nat } from 'types/type-aliases';
import CurrencyService from 'token-service/currency';
import { some } from 'lodash';

export const useCurrencyBalance = (args: {
  tezos: TezosToolkit | undefined;
  assetContract: address | undefined;
  assetTokenId: nat | undefined;
  holderAddress: string | undefined;
}) => {
  return useSWR(
    some(args, (k) => Boolean(k) === false) ? null : [args],
    new CurrencyService(args.assetContract).getBalance
  );
};
