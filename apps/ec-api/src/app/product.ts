import { Express, Request, Response } from 'express';
import { Product } from '@nx-vercel-workspace/types';

const products: Product[] = new Array(15)
  .fill(null)
  .map((_, i) => ({ id: i, name: `Product ${i}` }));

export const addProductApiRoutes = (app: Express) => {
  app.get('/api/products', (req: Request, res: Response) => {
    const max = req.query['max'];
    const response = max ? products.slice(0, Number(max)) : products;
    res.send(response);
  });
};
