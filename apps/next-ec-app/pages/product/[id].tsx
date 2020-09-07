import React from 'react';
import { Box } from 'grommet';
import { GetStaticPaths, GetStaticProps } from 'next';
import fetch from 'node-fetch';
import { Product } from '@nx-vercel-workspace/types';

/* eslint-disable-next-line */
export interface ProductPageProps {
  product: Product;
}

export const ProductPage = (props: ProductPageProps) => {
  return (
    <Box flex pad={'large'}>
      {props.product.name}
    </Box>
  );
};

const basePath = `http://localhost:3333`;
export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${basePath}/api/products`);
  const products = (await response.json()) as Product[];
  return {
    paths: products.map((product) => {
      return {
        params: { id: product.id.toString() },
      };
    }),
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(`${basePath}/api/product/${params.id}`);
  const product = await response.json();
  return {
    props: { product },
  };
};
export default ProductPage;
