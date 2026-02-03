import { type Product } from "@/types/products";

import { INITIAL_COUNT, PAGE_SIZE } from "./constants";

export const getPageProducts = (
  products: Product[],
  page: number
): Product[] => {
  if (page === 0) {
    return products.slice(0, INITIAL_COUNT);
  }
  const startIndex = INITIAL_COUNT + (page - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  return products.slice(startIndex, endIndex);
};

export const getTotalPages = (totalProducts: number): number => {
  if (totalProducts <= INITIAL_COUNT) return 1;
  return 1 + Math.ceil((totalProducts - INITIAL_COUNT) / PAGE_SIZE);
};
