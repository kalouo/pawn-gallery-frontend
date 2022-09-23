import { TezosToolkit } from '@taquito/taquito';
import { some } from 'lodash';
import { Contracts, Currency } from 'contexts/tezos/types';
import RequestService from 'request-service';
import useSWR from 'swr';

export const useRequest = (args: {
  tezos: TezosToolkit | undefined;
  contracts: Contracts | undefined;
  currencies: Currency[] | undefined;
  requestId: string | undefined;
}) => {
  return useSWR(
    some(args, (k) => Boolean(k) === false) ? null : [args],
    RequestService.getRequestById
  );
};
