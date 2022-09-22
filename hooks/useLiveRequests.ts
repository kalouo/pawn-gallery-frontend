import { TezosToolkit } from '@taquito/taquito';
import { Contracts, Currency } from 'contexts/tezos/types';
import RequestService from 'request-service';
import useSWR from 'swr';

export const useLiveRequests = ({
  tezos,
  contracts,
  currencies,
}: {
  tezos: TezosToolkit;
  contracts: Contracts;
  currencies: Currency[];
}) => {
  return useSWR([{ tezos, contracts, currencies }], RequestService.getLiveRequests);
};
