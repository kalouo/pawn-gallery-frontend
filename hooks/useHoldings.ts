import { queryUserAssets } from 'graphql/teztok/queries';

const loadSandboxHoldings = () => {
  const deployments = require('../contracts/build/chinstrap_deployments.json');
  const { test_nft } = deployments['chinstrap']['networks']['development'];

  return [
    {
      amount: 1,
      first_received_at: '',
      token: {
        fa2_address: test_nft.address,
        token_id: 0,
        name: 'Test NFT',
        description: '',
        thumbnail_uri: '/images/test-nft.jpeg',
        platform: 'Sandbox',
      },
    },
  ];
};

export const useHoldings = (address: string) => {
  if (process.env.NEXT_PUBLIC_NETWORK === 'development') {
    return { data: loadSandboxHoldings(), isLoading: false, error: null };
  } else {
    const { data, error } = queryUserAssets({ address });
    return { data: data?.holdings, isLoading: !error && !data, isError: error };
  }
};
