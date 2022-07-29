import type { NextPage } from 'next';
import useSWR from 'swr';

import { requestor } from 'graphql/teztok';
import { useWallet } from 'hooks/useWallet';

import { ALL_USER_ASSETS_QUERY } from 'graphql/teztok/queries';
import AssetCard from 'components/AssetCard';
import styled from 'styled-components';

const BorrowContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 100px 120px;
`;

const Borrow: NextPage = () => {
  const { address, initialized } = useWallet();

  const { data, error } = useSWR([ALL_USER_ASSETS_QUERY, { address }], requestor);
  return (
    <BorrowContainer>
      {data?.holdings?.map((asset: { [key: string]: any }, index: number) => (
        <AssetCard
          key={`user_asset_${index}`}
          thumbnailUri={asset?.token?.thumbnail_uri}
          name={asset?.token?.name}
          tokenId={asset?.token?.token_id}
          tokenAddress={asset?.token?.fa2_address}
          platform={asset?.token?.platform}
        />
      ))}
    </BorrowContainer>
  );
};

export default Borrow;
