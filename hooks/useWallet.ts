import { useState } from 'react';
import { useTezosContext } from 'contexts/tezos';
import { BeaconMessageType, NetworkType } from '@airgap/beacon-sdk';
import { notifyError } from 'utils/notifier';

export function useWallet() {
  const { wallet } = useTezosContext();
  const [initialized, setInitialized] = useState<boolean>(false);
  const [address, setAddress] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  async function sync() {
    const activeAccount = await wallet?.client.getActiveAccount();

    if (activeAccount) {
      setAddress(activeAccount.address);
      setInitialized(true);
    }
  }

  async function connect() {
    setLoading(true);
    if (wallet) {
      try {
        const response = await wallet.client.requestPermissions({
          network: { type: NetworkType.MAINNET },
        });
        setInitialized(true);
        console.log('Setting address', response.address);
        setAddress(response.address);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
  }

  async function disconnect() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (wallet) {
      try {
        await wallet.clearActiveAccount();
        setInitialized(false);
        setAddress('');
      } catch (error) {
        notifyError('ERROR', 'Could not disconnect wallet.');
      }
    }
  }

  sync();

  return {
    initialized,
    address,
    loading,
    connect,
    disconnect,
    sync,
  };
}
