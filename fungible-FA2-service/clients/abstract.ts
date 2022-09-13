import { TezosToolkit } from '@taquito/taquito';
import { nat } from 'types/type-aliases';

export interface IFungibleFA2Service {
  getBalance(tezos: TezosToolkit, address: string, tokenId: number): Promise<nat>;
}
