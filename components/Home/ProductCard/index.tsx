import { useState } from "react";

import { View, TouchableOpacity } from "react-native";

import { Image } from "expo-image";

import { Ionicons } from "@expo/vector-icons";

import Typography from "@/components/ui/Typography";
import { colors } from "@/styles/colors";
import { type Product } from "@/types/products";

import { styles } from "./styles";


interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [imageError, setImageError] = useState(false);

  const { productName, image, amount } = product;
  const { cardContainer, image: imageStyle, imagePlaceholder } = styles;

  return (
    <TouchableOpacity
      className="flex-1 m-2 bg-gray-100 rounded-2xl"
      style={cardContainer}
    >
      <View className="px-2 pt-2">
        {imageError ? (
          <View
            className="items-center justify-center rounded-lg"
            style={imagePlaceholder}
          >
            <Ionicons color={colors.gray400} name="image-outline" size={40} />
            <Typography className="text-gray-400 mt-1" variant="label">
              No Image
            </Typography>
          </View>
        ) : (
          <Image
            contentFit="contain"
            source={{ uri: image }}
            style={imageStyle}
            onError={() => setImageError(true)}
          />
        )}
      </View>

      <View className="bg-primary px-3 py-2 rounded-full flex-row items-center justify-between">
        <Typography
          className="text-white flex-1"
          numberOfLines={1}
          variant="bodySmall"
          weight="medium"
        >
          {productName}
        </Typography>
        <Typography className="text-white ml-2" variant="label" weight="semibold">
          ₹ {amount.toFixed(2)}
        </Typography>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
