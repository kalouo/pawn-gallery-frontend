import { SandboxRequestService } from './clients/sandbox';

let client;

switch (process.env.NEXT_PUBLIC_NETWORK) {
  case 'development':
    client = new SandboxRequestService();
    break;
}

export default client as SandboxRequestService;
