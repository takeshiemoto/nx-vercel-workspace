/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { addProductApiRoutes } from './app/product';
import { addCartApiRoutes } from './app/cart';

const app = express();

addProductApiRoutes(app);
addCartApiRoutes(app);

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to ec-api!' });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
