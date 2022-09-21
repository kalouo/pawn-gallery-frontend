import { TezosToolkit } from '@taquito/taquito';
import { FA2NFT } from 'contract-types';
import { tas } from 'types/type-aliases';
import { Client } from './abstract';

export class SandboxClient implements Client {
  public async getHoldings(args: { address: string; tezos: TezosToolkit }) {
    const deployments = require('../../../contracts/build/chinstrap_deployments.json');
    const { test_nft } = deployments['chinstrap']['networks']['development'];

    const token = await args.tezos.wallet.at<FA2NFT>(test_nft.address);
    const storage = await token.storage();
    const entry = await storage.ledger.get(tas.nat(0));

    return {
      data:
        entry === args.address
          ? [
              {
                amount: 1,
                token: {
                  fa2_address: test_nft.address,
                  token_id: 0,
                  name: 'Test NFT',
                  description: '',
                  thumbnail_uri: '/images/test-nft.jpeg',
                  platform: 'Sandbox',
                },
              },
            ]
          : [],
      isLoading: false,
      isError: null,
    };
  }

  public getCollateral() {
    return {
      data: {
        name: 'Test NFT',
        description: '',
        platform: 'Sandbox',
        thumbnail_uri: '/images/test-nft.jpeg',
      },
      isLoading: false,
      isError: null,
    };
  }
}
