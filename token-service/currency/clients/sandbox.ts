import { ContractMethod, TezosToolkit, Wallet } from '@taquito/taquito';
import { FA2Fungible } from 'contract-types';
import { ICurrencyService } from './abstract';
import { address, nat, tas } from 'types/type-aliases';

export class SandboxCurrencyService implements ICurrencyService {
  address: string;
  constructor(address: string) {
    this.address = address;
  }

  public async getBalance(args: {
    tezos: TezosToolkit;
    assetContract: address;
    assetTokenId: nat;
    holderAddress: address;
  }) {
    if (!args.tezos || !args.assetContract || !args.assetTokenId || !args.holderAddress) {
      return tas.nat(0);
    }
    try {
      const contract = await args.tezos.wallet.at<FA2Fungible>(args.assetContract);
      const storage = await contract.storage();
      const ledgerKey = { 0: args.holderAddress, 1: args.assetTokenId };
      const balance = await storage.ledger.get(ledgerKey);

      return balance;
    } catch (e) {
      console.log(e);
      return tas.nat(0);
    }
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
      const contract = await args.tezos.wallet.at<FA2Fungible>(args.assetContract);
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

  public async addOperator(args: {
    tezos: TezosToolkit;
    assetContract: address;
    assetTokenId: nat;
    owner: address;
    operator: address;
  }): Promise<ContractMethod<Wallet>> {
    const contract = await args.tezos.wallet.at<FA2Fungible>(args.assetContract);
    console.log(contract.methods);
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

  public async removeOperator(args: {
    tezos: TezosToolkit;
    assetContract: address;
    assetTokenId: nat;
    owner: address;
    operator: address;
  }): Promise<ContractMethod<Wallet>> {
    const contract = await args.tezos.wallet.at<FA2Fungible>(args.assetContract);
    const op = contract.methods.remove_operator(args.owner, args.operator, args.assetTokenId);
    return op;
  }
}
