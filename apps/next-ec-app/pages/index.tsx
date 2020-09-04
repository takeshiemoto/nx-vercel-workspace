import React, { useState } from 'react';
import fetch from 'node-fetch';

import {
  Box,
  Button,
  Card,
  Collapsible,
  Grid,
  Grommet,
  Header,
  Heading,
  Sidebar,
} from 'grommet';
import { Cart } from 'grommet-icons';
import { GetServerSideProps } from 'next';
import { Product } from '@nx-vercel-workspace/types';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

const basePath = `http://localhost:3333`;
export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(`${basePath}/api/products?max=6`);
  const products = (await response.json()) as Product[];
  return {
    props: { products },
  };
};

interface IndexPageProps {
  products: Product[];
}

export const Index = ({ products }: IndexPageProps) => {
  const [isVisibleCart, setIsVisibleCart] = useState(false);
  const brands = [
    'BEAMS',
    'SHIPS',
    'JOURNAL STANDARD',
    'TOMORROWLAND',
    'Patagonia',
    'URBAN RESEARCH',
  ];
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
          <Sidebar
            width={'small'}
            background={'light-2'}
            align={'center'}
            justify={'center'}
          >
            Sidebar
          </Sidebar>
          <Box flex pad={'large'}>
            <Heading level={'4'}>New Arrival</Heading>
            <Grid columns={{ count: 3, size: 'auto' }} gap={'small'}>
              {products.map((product) => (
                <Card key={product.id} pad={'large'}>
                  {product.name}
                </Card>
              ))}
            </Grid>
            <Heading level={'4'}>Brands</Heading>
            <Grid columns={{ count: 6, size: 'auto' }} gap={'small'}>
              {brands.map((brand, i) => (
                <Box
                  align={'center'}
                  justify={'center'}
                  background={'light-3'}
                  key={i}
                  pad={'large'}
                >
                  {brand}
                </Box>
              ))}
            </Grid>
          </Box>
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

export default Index;
