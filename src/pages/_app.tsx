
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { StoreProvider } from '../storage';
import '../assets/icon/css/aliiz.css';
import '../styles/globals.scss';
import 'tailwindcss/tailwind.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
      <Analytics />
    </StoreProvider>
  );
}
