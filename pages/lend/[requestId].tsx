import { useRouter } from 'next/router';

import { useTezosContext } from 'contexts/tezos';

export default function Example() {
  const { currencies, contracts, tezos } = useTezosContext();

  const router = useRouter();

  const { requestId } = router.query;

  return <div className="bg-white"> HELLO {requestId}</div>;
}
