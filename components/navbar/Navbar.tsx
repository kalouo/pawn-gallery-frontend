// import styles from './Navbar.module.css';
import styled from 'styled-components';

import { useWallet } from 'hooks/useWallet';
import { shortenAddress } from 'utils/address';

const NavbarContainer = styled.div`
  height: 11vh;
  border-bottom: ${(props) => props.theme.colors.WHITE} 1px solid;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .left {
  }

  .right {
  }
`;

const ConnectionButton = styled.div`
  color: ${(props) => props.theme.colors.WHITE}};
  border: 1px solid ${(props) => props.theme.colors.WHITE}};
  padding: 7.5px;
  cursor: pointer;
  white-space: nowrap;
  :hover {
    background-color: gray;
  }
`;

const Navbar = () => {
  const { initialized, address, connect, disconnect } = useWallet();

  return (
    <NavbarContainer>
      <div className="left"> </div>
      <div className="right">
        <ConnectionButton onClick={() => (initialized ? disconnect() : connect())}>
          {initialized ? `ꜩ ${shortenAddress(address)}` : 'CONNECT'}
        </ConnectionButton>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
