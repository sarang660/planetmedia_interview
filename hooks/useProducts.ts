import { useQuery } from '@tanstack/react-query';

import { fetchProducts } from '@/api/products';
import { queryKeys } from '@/lib/queryKeys';

export const useProducts = () =>
  useQuery({
    queryKey: [queryKeys.products],
    queryFn: fetchProducts,
  });
