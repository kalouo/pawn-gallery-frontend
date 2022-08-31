import type { AppProps } from 'next/app';

import { Contracts, TezosContext } from 'contexts/tezos';

import { TezosToolkit } from '@taquito/taquito';
import { BeaconWallet } from '@taquito/beacon-wallet';
import { ReactNotifications } from 'react-notifications-component';
import { useEffect, useState } from 'react';

import 'styles/globals.css';
import 'react-notifications-component/dist/theme.css';
import { Layout } from 'components/higher-order';

import { store } from 'store';
import { Provider as StoreProvider } from 'react-redux';
import { loadContractAddresses } from 'utils/contracts';

function MyApp({ Component, pageProps }: AppProps) {
  const [wallet, setWallet] = useState<BeaconWallet>();
  const [tezos, setTezos] = useState<TezosToolkit>();
  const [contracts, setContracts] = useState<Contracts>();

  useEffect(() => {
    (async () => {
      if (!wallet) {
        const _wallet = new BeaconWallet({ name: 'pawn.gallery' });
        const _tezos = new TezosToolkit('https://mainnet.smartpy.io');
        const _contracts = loadContractAddresses();

        setWallet(_wallet);
        setTezos(_tezos);
        setContracts(_contracts);
      }
    })();
  }, [wallet]);

  return (
    <StoreProvider store={store}>
      <TezosContext.Provider value={{ tezos, wallet, contracts }}>
        <ReactNotifications />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </TezosContext.Provider>
    </StoreProvider>
  );
}

export default MyApp;
