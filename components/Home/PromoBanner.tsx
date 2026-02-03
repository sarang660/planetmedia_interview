import { View, Image } from "react-native";

import FlashSaleBanner from "@/assets/images/flash-sale-banner.jpg";

const PromoBanner = () => (
  <View className="mx-4 my-3 rounded-2xl overflow-hidden">
    <Image
      className="w-full h-44"
      resizeMode="cover"
      source={FlashSaleBanner}
    />
  </View>
);

export default PromoBanner;
