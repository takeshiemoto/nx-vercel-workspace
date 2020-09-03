import React, { useEffect, useState } from 'react';
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

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

export const Index = () => {
  useEffect(() => {
    fetch(`/api/products`)
      .then((res) => res.json())
      .then(console.log);
  }, []);
  const [isVisibleCart, setIsVisibleCart] = useState(false);
  const products = ['Cap', 'TShirt', 'Bottoms', 'Shoes'];
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
              {products.map((product, i) => (
                <Card key={i} pad={'large'}>
                  {product}
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
