import { TezosToolkit } from '@taquito/taquito';
import { some } from 'lodash';
import useSWR from 'swr';

import { address, nat } from 'types/type-aliases';
import NFTService from 'token-service/nft';

export const useNFTBalance = (args: {
  tezos: TezosToolkit | undefined;
  assetContract: address | undefined;
  assetTokenId: nat | undefined;
  holderAddress: string | undefined;
}) => {
  return useSWR(
    some(args, (k) => Boolean(k) === false) ? null : [args],
    new NFTService(args.assetContract).getBalance
  );
};
