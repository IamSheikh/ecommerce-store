import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import SocialLinksHeader from '../components/social-links-header';
import { useState, useEffect } from 'react';
import Header from '../components/header';
import { AuthProvider } from '../hooks/use-auth';
import Footer from '../components/footer';

function MySite({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <ChakraProvider>
        <AuthProvider>
          <SocialLinksHeader />
          <Header />
          <Component {...pageProps} />
          <Footer />
        </AuthProvider>
      </ChakraProvider>
    );
  }
}

export default MySite;
