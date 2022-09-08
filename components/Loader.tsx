import React from 'react';
import { ClipLoader } from 'react-spinners';
import { css } from '@emotion/react';

const override = css`
  margin: 0 auto;
`;

const Loader = () => <ClipLoader css={override} loading={true} />;

export default Loader;
