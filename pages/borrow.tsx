import Link from 'next/link';
import type { NextPage } from 'next';

import PleaseConnect from 'components/PleaseConnect';
import { useWeb3 } from 'hooks/useWeb3';
import { useHoldings } from 'hooks/useHoldings';

const Borrow: NextPage = () => {
  const { address } = useWeb3();

  const { data: holdings } = useHoldings(address as string);

  return address ? (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Your Collection</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {holdings?.map((asset: { [key: string]: any }, index: number) => {
            const imageSrc = asset?.token?.thumbnail_uri?.replace(
              'ipfs://',
              'https://ipfs.io/ipfs/'
            );

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
    </div>
  ) : (
    <PleaseConnect />
  );
};

export default Borrow;
