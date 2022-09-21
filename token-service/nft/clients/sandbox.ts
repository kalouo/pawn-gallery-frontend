import { ContractMethod, TezosToolkit, Wallet } from '@taquito/taquito';
import { FA2NFT } from 'contract-types';
import { INFTService } from './abstract';
import { address, nat, tas } from 'types/type-aliases';

export class SandboxNFTService implements INFTService {
  address: string;
  constructor(address: string) {
    this.address = address;
  }

  public async getOperator(args: {
    tezos: TezosToolkit;
    assetContract: address;
    assetTokenId: nat;
    owner: address;
    operator: address;
  }) {
    if (!args.tezos || !args.assetContract || !args.assetTokenId || !args.owner || !args.operator) {
      return false;
    }
    try {
      const contract = await args.tezos.wallet.at<FA2NFT>(args.assetContract);
      const storage = await contract.storage();
      const operatorKey = {
        owner: args.owner,
        operator: args.operator,
        token_id: args.assetTokenId,
      };

      const operator = await storage.operators.get(operatorKey);

      return Boolean(operator);
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  public async operationAddOperator(args: {
    tezos: TezosToolkit;
    assetContract: address;
    assetTokenId: nat;
    owner: address;
    operator: address;
  }): Promise<ContractMethod<Wallet>> {
    const contract = await args.tezos.wallet.at<FA2NFT>(args.assetContract);
    const op = contract.methods.update_operators([
      {
        add_operator: {
          owner: args.owner,
          operator: args.operator,
          token_id: args.assetTokenId,
        },
      },
    ]);

    return op;
  }

  public async operationRemoveOperator(args: {
    tezos: TezosToolkit;
    assetContract: address;
    assetTokenId: nat;
    owner: address;
    operator: address;
  }): Promise<ContractMethod<Wallet>> {
    const contract = await args.tezos.wallet.at<FA2NFT>(args.assetContract);
    const op = contract.methods.update_operators([
      {
        remove_operator: {
          owner: args.owner,
          operator: args.operator,
          token_id: args.assetTokenId,
        },
      },
    ]);

    return op;
  }
}
