import { NetworkType } from '@airgap/beacon-sdk';
import { notifyError } from 'utils/notifier';
import { selectWeb3 } from 'store/selectors/web3';
import { setAddress } from 'store/reducers/web3';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { useEffect, useState } from 'react';
import { useTezosContext } from 'contexts/tezos';

export const useWeb3 = () => {
  const dispatch = useAppDispatch();

  const { wallet, tezos } = useTezosContext();
  const { address } = useAppSelector(selectWeb3);

  async function connect() {
    if (wallet) {
      try {
        const response = await wallet.client.requestPermissions({
          network: { type: NetworkType.CUSTOM, rpcUrl: process.env.NEXT_PUBLIC_RPC_URL },
        });
        dispatch(setAddress(response.address));
      } catch (error) {
        console.error(error);
      }
    }
  }

  async function disconnect() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (wallet) {
      try {
        await wallet.clearActiveAccount();
        dispatch(setAddress(''));
      } catch (error) {
        notifyError('ERROR', 'Could not disconnect wallet.');
      }
    }
  }

  useEffect(() => {
    (async () => {
      if (!address) {
        const activeAccount = await wallet?.client.getActiveAccount();

        if (activeAccount) {
          dispatch(setAddress(activeAccount.address));
        }
      }
    })();
  }, [address, wallet]);

  return {
    connect,
    disconnect,
    address,
    wallet,
    tezos,
  };
};
