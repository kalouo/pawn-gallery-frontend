import { Contracts, Currency } from './types';

export const loadContractAddresses = (): Contracts => {
  if (process.env.NEXT_PUBLIC_NETWORK === 'development') {
    try {
      const deployments = require('../../contracts/build/chinstrap_deployments.json');
      const { loan_core } = deployments['chinstrap']['networks']['development'];
      return { loanCore: loan_core.address };
    } catch (e) {
      throw Error('Could not load sandbox contracts.');
    }
  } else
    return {
      loanCore: '',
    };
};

export const loadCurrencies = (): Currency[] => {
  if (process.env.NEXT_PUBLIC_NETWORK === 'development') {
    const deployments = require('../../contracts/build/chinstrap_deployments.json');
    const { test_currency } = deployments['chinstrap']['networks']['development'];

    return [
      {
        address: test_currency.address,
        decimals: 18,
        iconUrl: '/images/currencies/eurl.png',
        name: 'Sandbox EURL',
        symbol: 'sEURL',
        tokenId: 0,
      },
    ];
  } else return [];
};
