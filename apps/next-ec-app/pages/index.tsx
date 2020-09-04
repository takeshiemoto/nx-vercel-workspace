import React from 'react';
import fetch from 'node-fetch';

import { Box, Card, Grid, Heading, Sidebar } from 'grommet';
import { GetServerSideProps } from 'next';
import { Product } from '@nx-vercel-workspace/types';

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
  const brands = [
    'BEAMS',
    'SHIPS',
    'JOURNAL STANDARD',
    'TOMORROWLAND',
    'Patagonia',
    'URBAN RESEARCH',
  ];
  return (
    <>
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
    </>
  );
};

export default Index;
