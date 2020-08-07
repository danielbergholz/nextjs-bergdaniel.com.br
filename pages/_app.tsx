import { AppProps } from 'next/app';
import Head from 'next/head';

import { ThemeProvider } from '../context/theme';
import NavBar from '../components/NavBar';

import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Daniel Berg</title>
        <link rel="shortcut icon" href="/logo.ico" type="image/x-icon" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider>
        <NavBar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
