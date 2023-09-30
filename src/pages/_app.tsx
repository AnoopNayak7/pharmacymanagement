import { useRouter } from 'next/router';
import Navbar from '@/@core/components/Navbar';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store, { persistor } from '@/store/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const hideNavbarOnPages = ['/', '/register'];

  const hideNavbar = hideNavbarOnPages.includes(router.pathname);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <>
          {!hideNavbar && <Navbar />}
          <Component {...pageProps} />
        </>
      </PersistGate>
    </Provider>
  );
}
