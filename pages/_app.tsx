import 'styles/globals.css';
import type { AppProps } from 'next/app';
import ModalProvider from 'components/modal/modalProvider';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import AsyncBoundary from 'components/error/asyncBoundary';
import Modal from 'components/modal/modal';

import ErrorAlert from 'components/error/errorAlert';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      useErrorBoundary: true,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <AsyncBoundary
          pendingFallback={<div>Loading...</div>}
          rejectedFallback={({ error, reset }) => (
            <ErrorAlert error={error} reset={reset} />
          )}
        >
          <ModalProvider>
            <Component {...pageProps} />
            <Modal />
          </ModalProvider>
        </AsyncBoundary>
      </Hydrate>
    </QueryClientProvider>
  );
}
