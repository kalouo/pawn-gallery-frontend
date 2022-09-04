import { Client } from './abstract';

export class SandboxClient implements Client {
  public getHoldings() {
    const deployments = require('../../../contracts/build/chinstrap_deployments.json');
    const { test_nft } = deployments['chinstrap']['networks']['development'];
    return {
      data: [
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
      ],
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
