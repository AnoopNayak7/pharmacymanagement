import { useRouter } from 'next/router';
import Navbar from '@/@core/components/Navbar';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const hideNavbarOnPages = ['/', '/register'];

  const hideNavbar = hideNavbarOnPages.includes(router.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Component {...pageProps} />
    </>
  );
}
