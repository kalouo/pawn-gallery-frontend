import { Client } from './clients/abstract';
import { Teztok } from './clients/mainnet';
import { SandboxClient } from './clients/sandbox';

let client;

switch (process.env.NEXT_PUBLIC_NETWORK) {
  case 'development':
    client = new SandboxClient();
    break;

  case 'mainnet':
    client = new Teztok();
    break;
}

export default client as Client;
