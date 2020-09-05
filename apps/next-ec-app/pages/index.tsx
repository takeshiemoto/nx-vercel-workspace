import React from 'react';
import fetch from 'node-fetch';

import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Grid,
  Heading,
} from 'grommet';
import { GetServerSideProps } from 'next';
import { Product } from '@nx-vercel-workspace/types';
import { useRouter } from 'next/router';
import { Add, Favorite } from 'grommet-icons';

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
  const router = useRouter();
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
      <Box flex pad={'large'}>
        <Heading level={'4'}>New Arrival</Heading>
        <Grid columns={{ count: 3, size: 'auto' }} gap={'small'}>
          {products.map((product) => (
            <Card background={'light-1'} key={product.id}>
              <CardBody
                onClick={() =>
                  router.push(`/product/[id]`, `/product/${product.id}`)
                }
                pad={'large'}
              >
                {product.name}
              </CardBody>
              <CardFooter background={'light-2'} pad={'small'}>
                <Button icon={<Favorite />} />
                <Button
                  primary
                  color={'status-ok'}
                  icon={<Add size={'small'} />}
                  label={'Add Cart'}
                  margin={'xxsmall'}
                  gap={'xxsmall'}
                  size={'small'}
                />
              </CardFooter>
            </Card>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Index;
