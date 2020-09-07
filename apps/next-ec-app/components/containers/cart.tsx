import React, { createContext } from 'react';
import useSWR, { mutate } from 'swr';
import { Cart, Product } from '@nx-vercel-workspace/types';
import fetch from 'node-fetch';

export type CartContextType = {
  cart: Cart;
  addCart?: (product: Product) => void;
};

const initialCart: Cart = {
  items: [],
};

export const CartContext = createContext<CartContextType>({
  cart: { items: [] },
});

export const CartContainer = ({ children }) => {
  const { data, error } = useSWR<Cart>(`api/cart`, (url: string) =>
    fetch(url).then((response) => response.json())
  );
  const addCart = async (product: Product) => {
    const newCart: Cart = {
      ...data,
      items: [
        ...data.items,
        {
          product,
          count: 1,
        },
      ],
    };
    await mutate(`api/cart`, newCart, false);
    await mutate(
      `/api/cart`,
      await fetch('api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(product),
      })
    );
  };

  const cart = !data || error ? initialCart : data;
  return (
    <CartContext.Provider value={{ cart, addCart }}>
      {children}
    </CartContext.Provider>
  );
};
