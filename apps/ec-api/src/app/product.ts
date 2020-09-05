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
  app.get('/api/product/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const article = products.find((product) => product.id === Number(id));
    return res.send(article);
  });
};
