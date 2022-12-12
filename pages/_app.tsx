import 'styles/globals.css';
import type { AppProps } from 'next/app';
import ModalProvider from 'contexts/modalProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <Component {...pageProps} />
    </ModalProvider>
  );
}
