import { TezosToolkit } from '@taquito/taquito';
import { Contracts } from 'contexts/tezos/types';
import RequestService from 'request-service';
import useSWR from 'swr';

export const useRequest = ({
  tezos,
  contracts,
  requestId,
}: {
  tezos: TezosToolkit;
  contracts: Contracts;
  requestId: string;
}) => {
  return useSWR([{ tezos, contracts, requestId }], RequestService.getRequestById);
};
