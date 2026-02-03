import { useState, useCallback, useMemo } from "react";

import { Gesture } from "react-native-gesture-handler";
import { runOnJS } from "react-native-reanimated";

import { type Product } from "@/types/products";

import { SWIPE_THRESHOLD } from "../constants";
import { getPageProducts, getTotalPages } from "../utils";

interface UsePaginatedSwipeProps {
  products: Product[];
}

interface UsePaginatedSwipeReturn {
  visibleProducts: Product[];
  currentPage: number;
  totalPages: number;
  panGesture: ReturnType<typeof Gesture.Pan>;
}

export const usePaginatedSwipe = ({
  products,
}: UsePaginatedSwipeProps): UsePaginatedSwipeReturn => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = useMemo(
    () => getTotalPages(products.length),
    [products.length]
  );

  const visibleProducts = useMemo(
    () => getPageProducts(products, currentPage),
    [products, currentPage]
  );

  const goToNextPage = useCallback(() => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  }, [totalPages]);

  const goToPreviousPage = useCallback(() => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  }, []);

  const panGesture = useMemo(
    () =>
      Gesture.Pan()
        .activeOffsetX([-20, 20])
        .failOffsetY([-10, 10])
        .onEnd((event) => {
          if (event.translationX < -SWIPE_THRESHOLD) {
            runOnJS(goToNextPage)();
          } else if (event.translationX > SWIPE_THRESHOLD) {
            runOnJS(goToPreviousPage)();
          }
        }),
    [goToNextPage, goToPreviousPage]
  );

  return {
    visibleProducts,
    currentPage,
    totalPages,
    panGesture,
  };
};
