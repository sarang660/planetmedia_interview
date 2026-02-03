import { View } from "react-native";

import { GestureDetector } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import BottomNavigation from "@/components/Common/BottomNavigation";
import Header from "@/components/Common/Header";

import { PRODUCT_LIST_RESPONSE } from "./constants";
import { usePaginatedSwipe } from "./hooks/usePaginatedSwipe";
import ProductGrid from "./ProductGrid";
import PromoBanner from "./PromoBanner";

const Home = () => {
  const products = PRODUCT_LIST_RESPONSE.data.products;

  const { visibleProducts, panGesture } = usePaginatedSwipe({ products });

  return (
    <View className="flex-1 bg-gray-100">
      <SafeAreaView className="flex-1" edges={["top"]}>
        <Header />

        <GestureDetector gesture={panGesture}>
          <View className="flex-1">
            <ProductGrid
              ListHeaderComponent={<PromoBanner />}
              products={visibleProducts}
            />
          </View>
        </GestureDetector>
      </SafeAreaView>

      <BottomNavigation activeIndex={0} />
    </View>
  );
};

export default Home;
