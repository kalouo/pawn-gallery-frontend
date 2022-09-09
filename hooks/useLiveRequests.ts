import { TezosToolkit } from '@taquito/taquito';
import { Contracts } from 'contexts/tezos/types';
import RequestService from 'request-service';
import useSWR from 'swr';

export const useLiveRequests = ({
  tezos,
  contracts,
}: {
  tezos: TezosToolkit;
  contracts: Contracts;
}) => {
  return useSWR([{ tezos, contracts }], RequestService.getLiveRequests);
};
