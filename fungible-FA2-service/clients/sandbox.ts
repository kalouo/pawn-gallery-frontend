import { TezosToolkit } from '@taquito/taquito';
import { FA2Fungible } from 'contract-types';
import { IFungibleFA2Service } from './abstract';
import { tas } from 'types/type-aliases';

export class SandboxFungibleFA2Service implements IFungibleFA2Service {
  address: string;
  constructor(address: string) {
    this.address = address;
  }

  public async getBalance(tezos: TezosToolkit, address: string, tokenId: number) {
    const contract = await tezos.wallet.at<FA2Fungible>(address);
    const storage = await contract.storage();
    const ledgerKey = { '0': tas.address(address), '1': tas.nat(tokenId) };
    const balance = await storage.ledger.get(ledgerKey);
    return balance;
  }
}
