import { useState, Suspense } from 'react';
import 'styles/globals.css';
import type { AppProps } from 'next/app';
import ModalProvider from 'components/modal/modalProvider';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

import AxiosContainer from 'components/axiosContainer';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <AxiosContainer>
          <Suspense fallback={<div>fallback test</div>}>
            <ModalProvider>
              <Component {...pageProps} />
            </ModalProvider>
          </Suspense>
        </AxiosContainer>
      </Hydrate>
    </QueryClientProvider>
  );
}
