import { View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import BottomNavigation from "@/components/Common/BottomNavigation";
import Header from "@/components/Common/Header";

import { PRODUCT_LIST_RESPONSE } from "./constants";
import ProductGrid from "./ProductGrid";
import PromoBanner from "./PromoBanner";

const Home = () => {
  const products = PRODUCT_LIST_RESPONSE.data.products;

  return (
    <View className="flex-1 bg-gray-100">
      <SafeAreaView className="flex-1" edges={["top"]}>
        <Header />

        <View className="flex-1">
          <ProductGrid
            ListHeaderComponent={<PromoBanner />}
            products={products}
          />
        </View>
      </SafeAreaView>

      <BottomNavigation activeIndex={0} />
    </View>
  );
};

export default Home;
