import React, { useContext } from 'react';
import { Box, List, Text } from 'grommet';
import { CartItem } from '@nx-vercel-workspace/types';
import { CartContext } from './containers/cart';

export const CartList = () => {
  const { cart } = useContext(CartContext);
  return (
    <List data={cart.items}>
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
};
