import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styles';
import GlobalStyle from 'styles/global-style';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
