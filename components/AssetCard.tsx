import Image from 'next/image';
import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const AssetCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 20px;
  max-width: 240px;

  border: 1px solid white;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  .image {
    border: 1px solid white;
    width: 240px;
    height: 300px;
    object-fit: contain;
    overflow: hidden;
  }

  .info {
    height: 100px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

type Props = {
  thumbnailUri: string;
  name: string;
  tokenAddress: string;
  tokenId: string;
  platform: string;
};

const AssetCard = ({ thumbnailUri, tokenAddress, tokenId, name, platform }: Props) => {
  const router = useRouter();

  const handleClick: MouseEventHandler = (e) => {
    e.preventDefault();
    router.push(`borrow/${tokenAddress}/${tokenId}`);
  };

  const src = thumbnailUri?.replace('ipfs://', 'https://ipfs.io/ipfs/');
  return (
    <AssetCardContainer onClick={handleClick}>
      <div className="image">
        <Image width={240} height={300} src={src} />
      </div>
      <div className="info">
        <span>{name}</span>
        <span>{platform}</span>
      </div>
    </AssetCardContainer>
  );
};

export default AssetCard;
