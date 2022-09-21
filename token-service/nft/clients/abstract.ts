import { ContractMethod, TezosToolkit, Wallet } from '@taquito/taquito';
import { address, nat } from 'types/type-aliases';

export interface INFTService {
  getBalance(args: {
    tezos: TezosToolkit;
    assetContract: address;
    assetTokenId: nat;
    holderAddress: address;
  }): Promise<address | null>;

  setTarget(address: address, tezos: TezosToolkit): Promise<this>;

  getOperator({
    tezos,
    assetContract,
    assetTokenId,
    owner,
    operator,
  }: {
    tezos: TezosToolkit;
    assetContract: address;
    assetTokenId: nat;
    owner: address;
    operator: address;
  }): Promise<boolean>;

  addOperator({
    tezos,
    assetContract,
    assetTokenId,
    owner,
    operator,
  }: {
    tezos: TezosToolkit;
    assetContract: address;
    assetTokenId: nat;
    owner: address;
    operator: address;
  }): ContractMethod<Wallet>;

  removeOperator({
    tezos,
    assetContract,
    assetTokenId,
    owner,
    operator,
  }: {
    tezos: TezosToolkit;
    assetContract: address;
    assetTokenId: nat;
    owner: address;
    operator: address;
  }): ContractMethod<Wallet>;
}
