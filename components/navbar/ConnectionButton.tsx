import styled from 'styled-components';
//@ts-expect-error: no-implicit-any
import Identicon from 'react-identicons';

import { shortenAddress } from 'utils/address';

const ConnectionButtonContainer = styled.div<{ initialized: boolean }>`
  color:  ${(props) => props.theme.colors.MEDIUMGRAY};
  border: 1px solid ${(props) => props.theme.colors.MEDIUMGRAY}};
  padding: 10px;
  min-width: 160px;
  max-height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.initialized ? 'start' : 'center')};
  align-items: center;
  cursor: pointer;
  white-space: nowrap;
  :hover {
    color:  ${(props) => props.theme.colors.WHITE};
    border-color: ${(props) => props.theme.colors.WHITE};
  }
  .identicon {
    height: 28px !important;
    width: 28px !important;
    border-radius: 50%;
    margin-right: 18px;
  }
  .text {
    display: flex; 
    align-items: center;
  }
`;

type Props = {
  address: string;
  handleClick: () => {};
};

const ConnectionButton = ({ handleClick, address }: Props) => {
  return (
    <ConnectionButtonContainer initialized={Boolean(address)} onClick={handleClick}>
      {address ? (
        <>
          <Identicon string={address} className="identicon"></Identicon>
          <div className="text"> {shortenAddress(address)}</div>
        </>
      ) : (
        <div className="text">CONNECT WALLET</div>
      )}
    </ConnectionButtonContainer>
  );
};

export default ConnectionButton;
