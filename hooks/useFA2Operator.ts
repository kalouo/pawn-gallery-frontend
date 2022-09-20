import { TezosToolkit } from '@taquito/taquito';
import FungibleFA2Service from 'fungible-FA2-service';
import useSWR from 'swr';
import { address, nat } from 'types/type-aliases';

export const useFA2Operator = ({
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
    new FungibleFA2Service(assetContract).getOperator
  );
};
