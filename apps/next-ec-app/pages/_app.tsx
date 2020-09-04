import React, { useState } from 'react';
import { AppProps } from 'next/app';
import './styles.css';
import {
  Box,
  Button,
  Collapsible,
  Grommet,
  Header,
  Heading,
  Sidebar,
} from 'grommet';
import { Cart } from 'grommet-icons';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

const CustomApp = ({ Component, pageProps }: AppProps) => {
  const [isVisibleCart, setIsVisibleCart] = useState(false);
  return (
    <Grommet theme={theme} full>
      <Box fill>
        <Header
          direction={'row'}
          background={'dark-2'}
          pad={{ left: 'medium', right: 'small', vertical: 'small' }}
          elevation={'medium'}
          style={{ zIndex: 1 }}
        >
          <Heading level={'3'} margin={'none'}>
            EC App
          </Heading>
          <Button
            icon={<Cart />}
            onClick={() => setIsVisibleCart(!isVisibleCart)}
          />
        </Header>
        <Box direction={'row'} flex overflow={{ horizontal: 'hidden' }}>
          <Component {...pageProps} />
          <Collapsible direction={'horizontal'} open={isVisibleCart}>
            <Sidebar
              width={'medium'}
              background={'light-2'}
              align={'center'}
              justify={'center'}
            >
              Sidebar
            </Sidebar>
          </Collapsible>
        </Box>
      </Box>
    </Grommet>
  );
};

export default CustomApp;
