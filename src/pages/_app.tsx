import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import { StoreProvider } from '../storage';
import '../assets/icon/css/aliiz.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}
