import { Product } from '@nx-vercel-workspace/types';

export interface Cart {
  items: CartItem[];
}

export interface CartItem {
  product: Product;
  count: number;
}
