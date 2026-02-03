import { FlatList, View } from "react-native";

import { type Product } from "@/types/products";

import { styles } from "./styles";

import ProductCard from "../ProductCard";

interface ProductGridProps {
  products: Product[];
  ListHeaderComponent?: React.ReactElement;
}

const ProductGrid = ({
  products,
  ListHeaderComponent,
}: ProductGridProps) => (
  <FlatList
    ItemSeparatorComponent={() => <View className="h-2" />}
    ListHeaderComponent={ListHeaderComponent}
    contentContainerStyle={styles.contentContainer}
    data={products}
    keyExtractor={(item) => item.id.toString()}
    numColumns={2}
    showsVerticalScrollIndicator={false}
    renderItem={({ item }) => (
      <ProductCard product={item} />
    )}
  />
);

export default ProductGrid;
