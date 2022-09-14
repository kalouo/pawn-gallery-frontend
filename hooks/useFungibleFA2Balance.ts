import { TezosToolkit } from '@taquito/taquito';
import FungibleFA2Service from 'fungible-FA2-service';
import useSWR from 'swr';
import { address, nat } from 'types/type-aliases';

export const useFungibleFA2Balance = ({
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
    new FungibleFA2Service(assetContract).getBalance
  );
};
