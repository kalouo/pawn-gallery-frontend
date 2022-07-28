import type { NextPage } from 'next';
import useSWR from 'swr';

import { requestor } from 'graphql/teztok';
import { useWallet } from 'hooks/useWallet';

import { ALL_USER_ASSETS_QUERY } from 'graphql/teztok/queries';

const Borrow: NextPage = () => {
  const { address } = useWallet();

  const { data, error } = useSWR([ALL_USER_ASSETS_QUERY, { address }], requestor);

  return <div> BORROW</div>;
};

export default Borrow;
