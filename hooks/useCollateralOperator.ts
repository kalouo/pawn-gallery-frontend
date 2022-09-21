import { TezosToolkit } from '@taquito/taquito';
import useSWR from 'swr';

import { address, nat } from 'types/type-aliases';
import NFTService from 'token-service/nft';

export const useCollateralOperator = ({
  tezos,
  owner,
  operator,
  assetContract,
  assetTokenId,
}: {
  tezos: TezosToolkit;
  assetContract: address;
  assetTokenId: nat;
  owner: string;
  operator: string;
}) => {
  return useSWR(
    [{ tezos, owner, operator, assetContract, assetTokenId }],
    new NFTService(assetContract).getOperator
  );
};
