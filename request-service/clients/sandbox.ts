import { TezosToolkit } from '@taquito/taquito';

import { Contracts, Currency } from 'contexts/tezos/types';
import { IRequestService } from './abstract';
import { nat, tas } from 'types/type-aliases';
import { OriginationController } from 'contract-types';
import BigNumber from 'bignumber.js';

export class SandboxRequestService implements IRequestService {
  public async getLiveRequests({
    tezos,
    contracts,
    currencies,
  }: {
    tezos: TezosToolkit;
    contracts: Contracts;
    currencies: Currency[];
  }) {
    const originationController = await tezos?.wallet.at<OriginationController>(
      contracts?.originationController as string
    );

    const storage = await originationController?.storage();

    const result = await Promise.all([storage?.requests_by_id.get(tas.nat(0))]);

    return {
      data: result.filter(Boolean).map((item, index) => {
        const loanCurrency = currencies?.find(
          (ccy) => ccy.address === item.loan_denomination_contract
        );

        if (!loanCurrency) {
          throw Error('Currency not supported.');
        }

        const divider = new BigNumber(10).exponentiatedBy(loanCurrency.decimals);
        const normalizedLoanPrincipal = item.loan_principal_amount.dividedBy(divider);
        const normalizedLoanInterest = item.interest_amount.dividedBy(divider);
        return {
          requestId: index,
          imageUrl: '/images/test-nft.jpeg',
          collateralName: 'Sandbox NFT',
          platformName: 'Sandbox',
          loanAmount: normalizedLoanPrincipal.toString(),
          loanCurrency: loanCurrency.symbol,
          loanDurationDays: item.loan_duration.toString(),
          interestAmount: normalizedLoanInterest.toString(),
        };
      }),
      isLoading: false,
      isError: null,
    };
  }

  public async getRequestById(args: {
    tezos: TezosToolkit;
    contracts: Contracts;
    currencies: Currency[];
    requestId: nat;
  }) {
    const originationController = await args.tezos?.wallet.at<OriginationController>(
      args.contracts?.originationController as string
    );

    const storage = await originationController?.storage();
    const request = await storage?.requests_by_id.get(args.requestId);

    if (!request)
      return {
        data: null,
        isLoading: false,
        isError: Error('404: NOT FOUND'),
      };

    const loanCurrency = args.currencies?.find(
      (ccy) => ccy.address === request.loan_denomination_contract
    );

    if (!loanCurrency) {
      throw Error('Currency not supported.');
    }

    const divider = new BigNumber(10).exponentiatedBy(loanCurrency.decimals);
    const normalizedLoanPrincipal = request.loan_principal_amount.dividedBy(divider).toString();
    const normalizedLoanInterest = request.interest_amount.dividedBy(divider).toString();

    return {
      data: {
        collateralContract: request.collateral_contract,
        collateralTokenId: request.collateral_token_id,
        borrower: request.creator,
        interestAmount: normalizedLoanInterest,
        loanDenominationContract: request.loan_denomination_contract,
        loanDenominationTokenId: request.loan_denomination_token_id,
        loanDuration: request.loan_duration,
        loanPrincipalAmount: normalizedLoanPrincipal,
        imageUrl: '/images/test-nft.jpeg',
        collateralName: 'Sandbox NFT',
        platformName: 'Sandbox',
        loanCurrency: 'sEURL',
      },
      isLoading: false,
      isError: null,
    };
  }
}
