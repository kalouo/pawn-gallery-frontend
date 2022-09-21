import { ContractMethod, TezosToolkit, Wallet } from '@taquito/taquito';
import { address, nat } from 'types/type-aliases';

export interface INFTService {
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
  }): Promise<ContractMethod<Wallet>>;

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
  }): Promise<ContractMethod<Wallet>>;
}
