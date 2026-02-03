import api from '@/lib/axios';
import type { Product, ProductsResponse } from '@/types/products';

export type { Product, ProductsResponse };

export const fetchProducts = async () => {
  const { data } = await api.get<ProductsResponse>('/interview-demo');
  return data;
};
