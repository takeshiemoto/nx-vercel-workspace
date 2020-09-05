import { Express, Request, Response } from 'express';
import { Cart } from '@nx-vercel-workspace/types';

const cart: Cart = {
  // Mock
  items: [
    {
      product: {
        id: 1,
        name: 'AAA',
      },
      count: 2,
    },
    {
      product: {
        id: 2,
        name: 'BBB',
      },
      count: 4,
    },
  ],
};

export const addCartApiRoutes = (app: Express) => {
  app.get('/api/cart', (req: Request, res: Response) => {
    res.send(cart);
  });
  app.post('/api/cart', (req: Request, res: Response) => {
    // todo items.push
    res.send([]);
  });
  app.delete('/api/cart/:productId', (req: Request, res: Response) => {
    // todo items.filter
    res.send([]);
  });
};
