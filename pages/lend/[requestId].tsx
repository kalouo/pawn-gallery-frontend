import { useRouter } from 'next/router';

import { useTezosContext } from 'contexts/tezos';
import { useRequest } from 'hooks/useRequest';
import { TezosToolkit } from '@taquito/taquito';
import { Contracts, Currency } from 'contexts/tezos/types';
import { useState } from 'react';
import Loader from 'components/Loader';
import { shortenAddress } from 'utils/address';
import { useCurrencyBalance } from 'hooks/useCurrencyBalance';
import { useWeb3 } from 'hooks/useWeb3';
import { address, nat, tas } from 'types/type-aliases';
import { useCollateralOperator } from 'hooks/useCollateralOperator';
import { useNFTBalance } from 'hooks/useNFTBalance';
import CurrencyService from 'token-service/currency';
import { OriginationController } from 'contract-types';
import { ExclamationCircleIcon, BadgeCheckIcon } from '@heroicons/react/solid';
import Error404 from 'components/404';

export default function RequestID() {
  const { contracts, tezos, currencies } = useTezosContext();
  const { address } = useWeb3();

  const router = useRouter();

  const { requestId } = router.query;

  const { data: request } = useRequest({
    requestId: requestId as string,
    tezos: tezos as TezosToolkit,
    contracts: contracts as Contracts,
    currencies: currencies as Currency[],
  });

  if (!request?.data) {
    return (
      <Error404
        header="Request not found"
        subheader="Please check the URL in the address bar and try again."
      ></Error404>
    );
  }

  const { data: currencyBalance } = useCurrencyBalance({
    tezos: tezos as TezosToolkit,
    assetTokenId: request?.data.loanDenominationTokenId as nat,
    assetContract: request?.data.loanDenominationContract as address,
    holderAddress: address as address,
  });

  const { data: collateralOwner } = useNFTBalance({
    tezos: tezos as TezosToolkit,
    assetContract: request?.data.collateralContract as address,
    assetTokenId: request?.data.collateralTokenId as nat,
    holderAddress: address as string,
  });

  const { data: isApproved } = useCollateralOperator({
    tezos: tezos as TezosToolkit,
    assetTokenId: request?.data.collateralTokenId as nat,
    assetContract: request?.data.collateralContract as address,
    owner: request?.data.borrower as address,
    operator: contracts?.collateralVault as address,
  });

  enum TransactionStep {
    NOT_SUBMITTED,
    CONFIRMING,
    CONFIRMED,
  }

  const [transactionStep, setTransactionStep] = useState<TransactionStep>(
    TransactionStep.NOT_SUBMITTED
  );

  const handleSubmit = async () => {
    setTransactionStep(TransactionStep.CONFIRMING);

    const currencyService = await new CurrencyService().setTarget(
      request?.data.loanDenominationContract as address,
      tezos as TezosToolkit
    );
    const originationController = await tezos?.wallet.at<OriginationController>(
      contracts?.originationController as string
    );

    if (!originationController) {
      throw Error('Failed to set origination controller.');
    }

    const operations = [
      currencyService.addOperator({
        tezos: tezos as TezosToolkit,
        assetContract: request?.data.loanDenominationContract as address,
        assetTokenId: request?.data.loanDenominationTokenId as nat,
        owner: tas.address(address as string),
        operator: tas.address(contracts?.loanCore as string),
      }),
      originationController.methods.originate_loan(tas.nat(requestId as string)),
      currencyService.removeOperator({
        tezos: tezos as TezosToolkit,
        assetContract: request?.data.loanDenominationContract as address,
        assetTokenId: request?.data.loanDenominationTokenId as nat,
        owner: tas.address(address as string),
        operator: tas.address(contracts?.loanCore as string),
      }),
    ];

    const batch = operations.reduce((acc, i) => acc?.withContractCall(i), tezos?.wallet.batch());
    const op = await batch?.send();
    await op?.confirmation(1);

    setTransactionStep(TransactionStep.CONFIRMED);
  };

  const renderButton = () => {
    switch (transactionStep) {
      case TransactionStep.NOT_SUBMITTED:
        return (
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:ml-6 sm:order-last sm:w-auto"
          >
            ORIGINATE LOAN
          </button>
        );

      case TransactionStep.CONFIRMING: {
        return (
          <div className="sm:order-last py-2 px-4">
            <Loader />
          </div>
        );
      }

      case TransactionStep.CONFIRMED: {
        return (
          <div className="sm:order-last mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-left.">
            Transaction confirmed!
          </div>
        );
      }
    }
  };

  return (
    <div className="bg-white">
      {/* Background color split screen for large screens */}
      <div className="hidden lg:block w-1/2 h-full bg-white" aria-hidden="true" />
      <div className="hidden lg:block w-1/2 h-full bg-gray-500" aria-hidden="true" />

      <div className="relative grid grid-cols-1 gap-x-16 max-w-7xl mx-auto lg:px-8 lg:grid-cols-2 xl:gap-x-48">
        <h1 className="sr-only">NFT Information</h1>

        <section
          aria-labelledby="summary-heading"
          className="bg-gray-50 pt-16 pb-10 px-4 sm:px-6 lg:px-0 lg:pb-16 lg:bg-transparent lg:row-start-1 lg:col-start-2"
        >
          <div className="max-w-lg mx-auto lg:max-w-none">
            <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
              NFT Information
            </h2>

            <div className="divide-y divide-gray-200 flex justify-center">
              <div className="py-6">
                <img src={request?.data.imageUrl} />
              </div>
            </div>

            <dl className="hidden text-sm font-medium text-gray-900 space-y-6 border-t border-gray-200 pt-6 lg:block">
              <div className="flex items-center justify-between">
                <dt className="text-gray-600">Name</dt>
                <dd>{request?.data.collateralName}</dd>
              </div>

              <div className="flex items-center justify-between">
                <dt className="text-gray-600">Platform</dt>
                <dd>{request?.data.platformName}</dd>
              </div>

              <div className="flex items-center justify-between border-t border-gray-200 pt-6"></div>
            </dl>
          </div>
        </section>

        <div className="pt-16 pb-36 px-4 sm:px-6 lg:pb-16 lg:px-0 lg:row-start-1 lg:col-start-1">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <section>
              <h2 id="payment-heading" className="text-lg font-medium text-gray-900">
                Loan Request
              </h2>

              <div className="mt-6 flex flex-col">
                {[
                  {
                    title: 'Borrower',
                    content: `${shortenAddress(request?.data.borrower ?? '')}`,
                  },
                  {
                    title: 'Loan Amount',
                    content: `${request?.data.loanPrincipalAmount} ${request?.data.loanCurrency}`,
                  },

                  {
                    title: 'Loan Interest',
                    content: `${request?.data.interestAmount} ${request?.data.loanCurrency} `,
                  },
                  {
                    title: 'Loan Duration',
                    content: `${request?.data.loanDuration} days`,
                  },
                ].map((item, index) => (
                  <div
                    className="mb-6 w-full flex flex-row justify-between"
                    key={`request-item-${index}`}
                  >
                    <div>{item.title}</div>
                    <div>{item.content}</div>
                  </div>
                ))}
              </div>
            </section>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-left ">
                {currencyBalance &&
                request?.data.loanPrincipalAmount &&
                currencyBalance.gte(request.data.loanPrincipalAmount) ? (
                  <div className="flex">
                    <BadgeCheckIcon className="h-5 w-5 text-green-500" /> &nbsp; Your balance is
                    sufficient
                  </div>
                ) : (
                  <div className="flex">
                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" /> &nbsp; Your balance
                    is not sufficient.
                  </div>
                )}
              </div>
              <div className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-left ">
                {request.data.borrower === collateralOwner ? (
                  <div className="flex">
                    <BadgeCheckIcon className="h-5 w-5 text-green-500" /> &nbsp; The collateral is
                    owned by the borrower.
                  </div>
                ) : (
                  <div className="flex">
                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" /> &nbsp; The collateral
                    is NOT owned by the borrower.
                  </div>
                )}
              </div>
              <div className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-left ">
                {isApproved ? (
                  <div className="flex">
                    <BadgeCheckIcon className="h-5 w-5 text-green-500" /> &nbsp; The collateral is
                    approved for transfer to the escrow.
                  </div>
                ) : (
                  <div className="flex">
                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" /> &nbsp; The collateral
                    is NOT approved for transfer to the escrow.
                  </div>
                )}
              </div>
            </div>

            <div className="mt-4 pt-6 border-t border-gray-200 sm:flex sm:items-center sm:justify-between">
              {renderButton()}

              <div className="sm:flex sm: flex-col flex flex-col">
                <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-left">
                  Lorem ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
