import Link from 'next/link';
import type { NextPage } from 'next';

import PleaseConnect from 'components/PleaseConnect';
import { useWeb3 } from 'hooks/useWeb3';
import { useHoldings } from 'hooks/useHoldings';
import Tabs from 'components/Tabs';
import { useLiveRequests } from 'hooks/useLiveRequests';
import { useTezosContext } from 'contexts/tezos';
import { TezosToolkit } from '@taquito/taquito';
import { Contracts } from 'contexts/tezos/types';

const LiveRequests = ({ address }: { address: string }) => {
  const { tezos, contracts } = useTezosContext();

  const { data: requests } = useLiveRequests({
    tezos: tezos as TezosToolkit,
    contracts: contracts as Contracts,
  });

  return (
    <div className="max-w-2xl mx-auto py-4 px-4 sm:px-0 sm:py-12 lg:max-w-7xl">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {requests?.data?.map((request, index) => {
          return (
            <div key={`holding-${index}`} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={request.imageUrl}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={``}>
                      <a>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {request.collateralName}
                      </a>
                    </Link>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">{request.platformName}</p>
              </div>
              <div className=" flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={``}>
                      <a>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {request.loanAmount} {request.loanCurrency}
                      </a>
                    </Link>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">{request.loanDurationDays} days</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Lend: NextPage = () => {
  const { address } = useWeb3();

  const tabItems = [
    { name: 'Live Requests', content: <LiveRequests address={address as string} /> },
    { name: 'Outstanding Loans', content: <>Coming Soon</> },
    { name: 'Live Offers', content: <>Coming Soon</> },
  ];

  return address ? (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-12 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Lend</span>
          <span className="block text-indigo-600 xl:inline"> against unique assets</span>
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

export default Lend;
