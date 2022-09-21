import { TezosToolkit } from '@taquito/taquito';
import useSWR from 'swr';

import { address, nat } from 'types/type-aliases';
import NFTService from 'token-service/nft';

export const useNFTBalance = ({
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
    new NFTService(assetContract).getBalance
  );
};
