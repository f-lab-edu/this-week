import 'styles/globals.css';
import type { AppProps } from 'next/app';
import ModalProvider from 'components/modal/modalProvider';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import AsyncBoundary from 'components/error/asyncBoundary';
import Modal from 'components/modal/modal';
import Navigator from 'components/navigator/navigator';

import ErrorAlert from 'components/error/errorAlert';
import Spinner from 'components/common/spinner';

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
        <ModalProvider>
          <AsyncBoundary
            pendingFallback={<Spinner />}
            rejectedFallback={({ error, reset }) => (
              <ErrorAlert error={error} reset={reset} />
            )}
          >
            <Navigator />
            <Component {...pageProps} />
            <Modal />
          </AsyncBoundary>
        </ModalProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
