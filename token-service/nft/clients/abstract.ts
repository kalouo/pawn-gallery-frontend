import { ContractMethod, TezosToolkit, Wallet } from '@taquito/taquito';
import { address, nat } from 'types/type-aliases';

export interface INFTService {
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

  operationAddOperator({
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

  operationRemoveOperator({
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
