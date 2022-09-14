import { TezosToolkit } from '@taquito/taquito';
import { address, nat } from 'types/type-aliases';

export interface IFungibleFA2Service {
  getBalance({
    tezos,
    assetContract,
    assetTokenId,
    holderAddress,
  }: {
    tezos: TezosToolkit;
    assetContract: address;
    assetTokenId: nat;
    holderAddress: address;
  }): Promise<nat>;
}
