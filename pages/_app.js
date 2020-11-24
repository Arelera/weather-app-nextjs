import { useState } from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <Header />
      <Component
        {...pageProps}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      <Footer />
    </>
  );
}
