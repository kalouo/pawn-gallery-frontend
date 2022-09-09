import { useTezosContext } from 'contexts/tezos';
import { IRequestService } from './abstract';
import { OriginationController } from 'contract-types';
import { tas } from 'types/type-aliases';
import { TezosToolkit } from '@taquito/taquito';
import { Contracts } from 'contexts/tezos/types';

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
}
