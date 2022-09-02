import type { AppProps } from 'next/app';

import { Contracts, Currency } from 'contexts/tezos/types';
import { loadContractAddresses, loadCurrencies } from 'contexts/tezos/setup';
import { TezosContext } from 'contexts/tezos';

import { TezosToolkit } from '@taquito/taquito';
import { BeaconWallet } from '@taquito/beacon-wallet';
import { ReactNotifications } from 'react-notifications-component';
import { useEffect, useState } from 'react';

import 'styles/globals.css';
import 'react-notifications-component/dist/theme.css';
import { Layout } from 'components/higher-order';

import { store } from 'store';
import { Provider as StoreProvider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
  const [wallet, setWallet] = useState<BeaconWallet>();
  const [tezos, setTezos] = useState<TezosToolkit>();
  const [contracts, setContracts] = useState<Contracts>();
  const [currencies, setCurrencies] = useState<Currency[]>();

  useEffect(() => {
    (async () => {
      if (!wallet && process.env.NEXT_PUBLIC_RPC_URL) {
        const _wallet = new BeaconWallet({ name: 'pawn.gallery' });
        const _tezos = new TezosToolkit(process.env.NEXT_PUBLIC_RPC_URL);
        const _contracts = loadContractAddresses();
        const _currencies = loadCurrencies();

        setWallet(_wallet);
        setTezos(_tezos);
        setContracts(_contracts);
        setCurrencies(_currencies);
      }
    })();
  }, [wallet, process.env.NEXT_PUBLIC_RPC_URL]);

  return (
    <StoreProvider store={store}>
      <TezosContext.Provider value={{ tezos, wallet, contracts, currencies }}>
        <ReactNotifications />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </TezosContext.Provider>
    </StoreProvider>
  );
}

export default MyApp;
