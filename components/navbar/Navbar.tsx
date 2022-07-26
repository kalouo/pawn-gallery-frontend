import styled from 'styled-components';
import Link from 'next/link';

import ConnectionButton from './ConnectionButton';
import { useWallet } from 'hooks/useWallet';

const NavbarContainer = styled.div`
  height: 11vh;
  border-bottom: ${(props) => props.theme.colors.MEDIUMGRAY} 1px solid;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 75px;

  .left {
    font-size: 36px;
  }

  .menu {
    width: 100%;
    padding: 50px;
    display: flex;
    flex-direction: row;
    justify-content: start;
    > a {
      margin-right: 25px;
    }
  }

  .right {
  }
`;

const Navbar = () => {
  const { address, connect, disconnect } = useWallet();

  return (
    <NavbarContainer>
      <div className="left"> PAWN.GALLERY </div>
      <div className="menu">
        <Link href="/borrow">
          <a>BORROW</a>
        </Link>
        <Link href="/lend">
          <a>LEND</a>
        </Link>
      </div>

      <div className="right">
        <ConnectionButton
          address={address}
          handleClick={() => (address ? disconnect() : connect())}
        />
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
