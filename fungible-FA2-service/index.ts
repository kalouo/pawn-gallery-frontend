import { SandboxFungibleFA2Service } from './clients/sandbox';

let client;

switch (process.env.NEXT_PUBLIC_NETWORK) {
  case 'development':
    client = SandboxFungibleFA2Service;
    break;
}

export default client;
