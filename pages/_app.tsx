/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';

import { Besley, Bodoni_Moda, Jost } from '@next/font/google';
import type { AppProps } from 'next/app';

const jost = Jost({
  variable: '--font-jost',
});

const besley = Besley({
  variable: '--font-besley',
});

const bodoni = Bodoni_Moda({
  variable: '--font-bodoni',
});

const App = ({ Component, pageProps }: AppProps) => (
  <main className={`${jost.variable} ${besley.variable} ${bodoni.variable}`}>
    <Component {...pageProps} />
  </main>
);

export default App;
