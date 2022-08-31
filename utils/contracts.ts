import { Contracts } from 'contexts/tezos';

export const loadContractAddresses = (): Contracts => {
  if (process.env.NEXT_PUBLIC_NETWORK === 'development') {
    try {
      const deployments = require('../contracts/build/chinstrap_deployments.json');
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
