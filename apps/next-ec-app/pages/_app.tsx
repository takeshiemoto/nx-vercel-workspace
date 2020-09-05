import React, { useMemo, useState } from 'react';
import useSWR from 'swr';
import { AppProps } from 'next/app';
import './styles.css';
import {
  Anchor,
  Box,
  Button,
  Collapsible,
  Grommet,
  Header,
  Heading,
  List,
  Sidebar,
  Text,
} from 'grommet';
import { Cart as CartIcon } from 'grommet-icons';
import Link from 'next/link';
import { Cart, CartItem, Product } from '@nx-vercel-workspace/types';

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
  const { data, error } = useSWR<Cart>(`api/cart`, (url: string) =>
    fetch(url).then((response) => response.json())
  );
  const CartList = useMemo(() => {
    if (error) {
      return <div>Errors</div>;
    }
    if (!data) {
      return <div>Loading...</div>;
    }
    return (
      <List data={data.items}>
        {(item: CartItem) => (
          <Box key={item.product.id} direction={'row'}>
            <Text weight={'normal'}>{item.product.name}</Text>
            <Text size={'small'} margin={{ left: 'small' }}>
              {item.count}
            </Text>
          </Box>
        )}
      </List>
    );
  }, [data]);
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
            <Link href={'/'} as={'/'}>
              <Anchor label={'EC Site'} />
            </Link>
          </Heading>
          <Button
            icon={<CartIcon />}
            onClick={() => setIsVisibleCart(!isVisibleCart)}
          />
        </Header>
        <Box direction={'row'} flex overflow={{ horizontal: 'hidden' }}>
          <Sidebar
            width={'small'}
            background={'light-2'}
            align={'center'}
            justify={'center'}
          />
          <Component {...pageProps} />
          <Collapsible direction={'horizontal'} open={isVisibleCart}>
            <Sidebar
              width={'medium'}
              background={'light-2'}
              justify={'center'}
              pad={'medium'}
            >
              <Heading level={'3'}>Cart</Heading>
              {CartList}
            </Sidebar>
          </Collapsible>
        </Box>
      </Box>
    </Grommet>
  );
};

export default CustomApp;
