import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout';

// Font Awesome の設定
import '@fortawesome/fontawesome-svg-core/styles.css';
// eslint-disable-next-line import/order
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
