import { AppProps } from 'next/app';

import { ThemeProvider } from '../context/theme';
import NavBar from '../components/NavBar';

import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider>
      <NavBar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
