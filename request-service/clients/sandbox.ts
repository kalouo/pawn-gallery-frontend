import { TezosToolkit } from '@taquito/taquito';

import { Contracts } from 'contexts/tezos/types';
import { IRequestService } from './abstract';
import { nat, tas } from 'types/type-aliases';
import { OriginationController } from 'contract-types';

export class SandboxRequestService implements IRequestService {
  public async getLiveRequests({
    tezos,
    contracts,
  }: {
    tezos: TezosToolkit;
    contracts: Contracts;
  }) {
    const originationController = await tezos?.wallet.at<OriginationController>(
      contracts?.originationController as string
    );

    const storage = await originationController?.storage();

    const result = await Promise.all([storage?.requests_by_id.get(tas.nat(0))]);

    return {
      data: result.map((item, index) => ({
        requestId: index,
        imageUrl: '/images/test-nft.jpeg',
        collateralName: 'Sandbox NFT',
        platformName: 'Sandbox',
        loanAmount: item.loan_principal_amount.toString(),
        loanCurrency: 'sEURL',
        loanDurationDays: item.loan_duration.toString(),
        interestAmount: item.interest_amount.toString(),
      })),
      isLoading: false,
      isError: null,
    };
  }

  public async getRequestById(args: { tezos: TezosToolkit; contracts: Contracts; requestId: nat }) {
    const originationController = await args.tezos?.wallet.at<OriginationController>(
      args.contracts?.originationController as string
    );

    const storage = await originationController?.storage();

    const result = await storage?.requests_by_id.get(args.requestId);

    return {
      data: {
        collateralContract: result.collateral_contract,
        collateralTokenId: result.collateral_token_id,
        borrower: result.creator,
        interestAmount: result.interest_amount,
        loanDenominationContract: result.loan_denomination_contract,
        loanDenominationTokenId: result.loan_denomination_token_id,
        loanDuration: result.loan_duration,
        loanPrincipalAmount: result.loan_principal_amount,
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
