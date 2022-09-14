import { TezosToolkit } from '@taquito/taquito';
import { FA2Fungible } from 'contract-types';
import { IFungibleFA2Service } from './abstract';
import { address, nat, tas } from 'types/type-aliases';

export class SandboxFungibleFA2Service implements IFungibleFA2Service {
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
}
