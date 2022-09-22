import { TezosToolkit } from '@taquito/taquito';
import { Contracts, Currency } from 'contexts/tezos/types';
import RequestService from 'request-service';
import useSWR from 'swr';

export const useRequest = ({
  tezos,
  contracts,
  requestId,
  currencies,
}: {
  tezos: TezosToolkit;
  contracts: Contracts;
  currencies: Currency[];
  requestId: string;
}) => {
  return useSWR([{ tezos, contracts, requestId, currencies }], RequestService.getRequestById);
};
