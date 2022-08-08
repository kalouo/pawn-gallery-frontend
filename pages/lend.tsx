import PleaseConnect from 'components/PleaseConnect';
import { useWeb3 } from 'hooks/useWeb3';
import type { NextPage } from 'next';

const Lend: NextPage = () => {
  const { address } = useWeb3();
  return address ? <div>LENDING</div> : <PleaseConnect />;
};

export default Lend;
