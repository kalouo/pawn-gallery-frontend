import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.containerLeft}> LEFT </div>
      <div className={styles.containerRight}>  RIGHT </div>
    </div>
  );
};

export default Navbar;

// const NavbarContainer = styled.div`
//   background-color: ${(props) => props.theme.bg0};
//   height: 10vh;
//   padding: 0% 2% 0% 0%;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;

//   .left {
//     display: flex;
//     align-items: center;
//     flex-direction: row;
//     font-size: 20px;
//     height: 85%;
//     > img {
//       max-width: 100%;
//       max-height: 100%;
//     }
//     > span {
//       color: ${(props) => props.theme.text1};
//     }
//   }

//   .center {
//   }

//   .right {
//   }
// `;

// function Navbar() {
//   const { toggle, isShown } = useModal();

//   return (
//     <NavbarContainer>
//       <div className="left">
//         <img src={TRIFECTA_ICON} alt={"TRIFECTA_ICON"}></img>
//         <span>TRIFECTA FINANCE</span>
//       </div>
//       <div className="center"></div>
//       <div className="right">
//         <ConnectionStatus onClick={toggle} />
//         <WalletModal isShown={isShown} hide={toggle} />
//       </div>
//     </NavbarContainer>
//   );
// }
