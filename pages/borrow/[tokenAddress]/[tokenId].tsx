import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const BorrowForm: NextPage = () => {
  const router = useRouter();

  const { tokenAddress, tokenId } = router.query;

  return (
    <div>
      Borrow {tokenAddress} {tokenId}{' '}
    </div>
  );
};

export default BorrowForm;
