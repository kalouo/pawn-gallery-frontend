import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styles';

import { TezosContext } from 'contexts/tezos';
import { TeztokContext } from 'contexts/teztok';

import { SetProviderOptions, TezosToolkit } from '@taquito/taquito';
import { BeaconWallet } from '@taquito/beacon-wallet';
import { ReactNotifications } from 'react-notifications-component';
import { useEffect, useState } from 'react';

import GlobalStyle from 'styles/global-style';

import 'react-notifications-component/dist/theme.css';
import { useTeztokClient } from 'graphql/clients';

function MyApp({ Component, pageProps }: AppProps) {
  const [wallet, setWallet] = useState<BeaconWallet>();
  const [tezos, setTezos] = useState<TezosToolkit>();

  const teztokClient = useTeztokClient(pageProps.initialGraphQLState);

  useEffect(() => {
    (async () => {
      if (!wallet) {
        const _wallet = new BeaconWallet({ name: 'pawn.gallery' });
        const _tezos = new TezosToolkit('https://mainnet.smartpy.io');

        _tezos.setProvider(_wallet as SetProviderOptions);

        setWallet(_wallet);
        setTezos(_tezos);
      }
    })();
  }, []);

  return (
    <TezosContext.Provider value={{ tezos, wallet }}>
      <TeztokContext.Provider value={{ client: teztokClient }}>
        <ThemeProvider>
          <GlobalStyle />
          <ReactNotifications />
          <Component {...pageProps} />
        </ThemeProvider>
      </TeztokContext.Provider>
    </TezosContext.Provider>
  );
}

export default MyApp;
