import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import styled from 'styled-components';

import { queryToken } from 'graphql/teztok/queries';
import Image from 'next/image';
import { useState } from 'react';

const BorrowFormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 25px 75px;

  .container {
    height: 500px;
    width: 100%;
    margin: 5px;
    background-color: ${(props) => props.theme.colors.DARKGRAY};
  }

  .left { 
    display: flex; 
    justify-content: center; 
    flex-direction: column;
    align-items: center;
    padding: 40px;
  }

  .right {
    display: flex; 
    flex-direction: column; 
  }

  .image {
    position: relative;
    width: 90%;
    height: 90%;
    
    object-fit: contain;
    overflow: scroll;
  }

  .header {
    font-size: 24px;
    margin-left: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .parameter-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .parameter-name {
    width: 200px;
    min-height: 75px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 10px;
    margin-left: 20px;
    font-size: 18px;
  }

`;

const currencies = [{ name: 'USDT' }, { name: 'EURL' }, { name: 'XTZ' }];

const BorrowForm: NextPage = () => {
  const router = useRouter();

  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

  const { tokenAddress, tokenId } = router.query;
  const { data, error } = queryToken({ tokenAddress, tokenId });
  const token = data?.tokens[0];

  const src = token?.thumbnail_uri?.replace('ipfs://', 'https://ipfs.io/ipfs/');

  return (
    <BorrowFormContainer>
      <div className="container left">
        <div className="image">
          {<Image layout="responsive" width={200} height={200} src={src} />}
        </div>
        <div>
          <div>{token?.name}</div>
          <div>{token?.platform}</div>
        </div>
      </div>

      <div className="container right">
        <div className="header"> Loan Request </div>

        <div className="parameter-container">
          <div className="parameter-name"> Loan Currency </div>
        </div>

        <div className="parameter-container">
          <div className="parameter-name"> Loan Amount </div>
        </div>

        <div className="parameter-container">
          <div className="parameter-name"> Loan Duration </div>
        </div>

        <div className="parameter-container">
          <div className="parameter-name"> Interest Rate </div>
        </div>
      </div>
    </BorrowFormContainer>
  );
};

export default BorrowForm;
