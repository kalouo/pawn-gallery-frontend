import { INFTService } from './clients/abstract';
import { SandboxNFTService } from './clients/sandbox';

let client;

switch (process.env.NEXT_PUBLIC_NETWORK) {
  case 'development':
    client = SandboxNFTService;
    break;
}

export default client as { new (...args: any): INFTService };
