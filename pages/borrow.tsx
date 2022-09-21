import Link from 'next/link';
import type { NextPage } from 'next';

import PleaseConnect from 'components/PleaseConnect';
import { useWeb3 } from 'hooks/useWeb3';
import { useHoldings } from 'hooks/useHoldings';
import Tabs from 'components/Tabs';
import { useTezosContext } from 'contexts/tezos';

const Holdings = ({ address }: { address: string }) => {
  const { tezos } = useTezosContext();

  if (!tezos) {
    throw Error('Tezos provider is not defined! ');
  }

  const { data } = useHoldings(address, tezos);

  return (
    <div className="max-w-2xl mx-auto py-4 px-4 sm:px-0 sm:py-12 lg:max-w-7xl">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {data?.data?.map((asset: { [key: string]: any }, index: number) => {
          const imageSrc = asset?.token?.thumbnail_uri?.replace('ipfs://', 'https://ipfs.io/ipfs/');

          return (
            <div key={`holding-${index}`} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={imageSrc}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={`borrow/${asset?.token?.fa2_address}/${asset?.token?.token_id}`}>
                      <a>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {asset?.token?.name}
                      </a>
                    </Link>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">{asset?.token?.platform}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Borrow: NextPage = () => {
  const { address } = useWeb3();

  const tabItems = [
    { name: 'Collateral', content: <Holdings address={address as string} /> },
    { name: 'Loans', content: <>Coming Soon</> },
    { name: 'Offers', content: <>Coming Soon</> },
  ];

  return address ? (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-12 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Borrow</span>
          <span className="block text-indigo-600 xl:inline"> against your assets</span>
        </h1>
      </div>
      <div className="max-w-2xl mx-auto px-2 sm:px-6 lg:max-w-7xl lg:px-8">
        <Tabs tabItems={tabItems} />
      </div>
    </div>
  ) : (
    <PleaseConnect />
  );
};

export default Borrow;
