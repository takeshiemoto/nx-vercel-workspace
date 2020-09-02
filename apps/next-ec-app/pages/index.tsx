import React, { useState } from 'react';
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

export const Index = () => {
  const [isVisibleCart, setIsVisibleCart] = useState(false);
  return (
    <Grommet full>
      <Box fill>
        <Header
          direction={'row'}
          background={'brand'}
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
          <Box flex align={'center'} justify={'center'}>
            app body
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
