import type { AppProps } from 'next/app';

import { TezosContext } from 'contexts/tezos';
import { PawnContractsContext } from 'contexts/pawn-contracts';

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

  useEffect(() => {
    (async () => {
      if (!wallet) {
        const _wallet = new BeaconWallet({ name: 'pawn.gallery' });
        const _tezos = new TezosToolkit('https://mainnet.smartpy.io');

        setWallet(_wallet);
        setTezos(_tezos);
      }
    })();
  }, [wallet]);

  return (
    <StoreProvider store={store}>
      <TezosContext.Provider value={{ tezos, wallet }}>
        <PawnContractsContext.Provider value={loadContractAddresses()}>
          <ReactNotifications />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PawnContractsContext.Provider>
      </TezosContext.Provider>
    </StoreProvider>
  );
}

export default MyApp;
