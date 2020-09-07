import { Express, Request, Response } from 'express';
import { Cart, CartItem, Product } from '@nx-vercel-workspace/types';

const cart: Cart = {
  items: [],
};

export const addCartApiRoutes = (app: Express) => {
  app.get('/api/cart', (req: Request, res: Response) => {
    res.send(cart);
  });
  app.post('/api/cart', (req: Request, res: Response) => {
    const product = req.body as Product;
    const cartItem: CartItem = {
      product,
      count: 1,
    };
    cart.items.push(cartItem);
    res.send(cartItem);
  });
  app.delete('/api/cart/:productId', (req: Request, res: Response) => {
    // todo items.filter
    res.send([]);
  });
};
