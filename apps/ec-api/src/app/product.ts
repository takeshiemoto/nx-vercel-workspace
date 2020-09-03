import { Express, Request, Response } from 'express';

interface Product {
  id: number;
  name: string;
}
const products: Product[] = new Array(15)
  .fill(null)
  .map((_, i) => ({ id: i, name: `Product ${i}` }));

export const addProductApiRoutes = (app: Express) => {
  app.get('/api/products', (req: Request, res: Response) => {
    res.send(products);
  });
};
