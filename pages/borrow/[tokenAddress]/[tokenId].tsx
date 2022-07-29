import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import { queryToken } from 'graphql/teztok/queries';

const BorrowForm: NextPage = () => {
  const router = useRouter();

  const { tokenAddress, tokenId } = router.query;

  const { data, error } = queryToken({ tokenAddress, tokenId });

  console.log(data);

  return (
    <div>
      Borrow {tokenAddress} {tokenId}{' '}
    </div>
  );
};

export default BorrowForm;
