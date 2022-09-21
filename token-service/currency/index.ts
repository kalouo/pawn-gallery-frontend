import { ICurrencyService } from './clients/abstract';
import { SandboxCurrencyService } from './clients/sandbox';

let client;

switch (process.env.NEXT_PUBLIC_NETWORK) {
  case 'development':
    client = SandboxCurrencyService;
    break;
}

export default client as { new (...args: any): ICurrencyService };
