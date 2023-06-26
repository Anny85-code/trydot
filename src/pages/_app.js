// import '../styles/app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;

/* eslint-disable */
function MyApp({ Component, pageProps }) {
  return (
    <div id="app">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>trydot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

/* eslint-enable */

export default MyApp;
