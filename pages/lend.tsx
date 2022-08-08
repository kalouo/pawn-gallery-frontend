import PleaseConnect from 'components/PleaseConnect';
import type { NextPage } from 'next';
import { useAppSelector } from 'store/hooks';
import { selectAddress } from 'store/selectors/web3';

const Lend: NextPage = () => {
  const address = useAppSelector(selectAddress);
  return address ? <div>LENDING</div> : <PleaseConnect />;
};

export default Lend;
