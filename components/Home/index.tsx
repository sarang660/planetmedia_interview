import { ActivityIndicator, Text, View } from 'react-native';

import { GestureDetector } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import BottomNavigation from '@/components/Common/BottomNavigation';
import Header from '@/components/Common/Header';
import { useProducts } from '@/hooks/useProducts';

import { usePaginatedSwipe } from './hooks/usePaginatedSwipe';
import ProductGrid from './ProductGrid';
import PromoBanner from './PromoBanner';

const Home = () => {
  const { data, isLoading, error } = useProducts();

  const products = data?.data.products ?? [];

  const { visibleProducts, panGesture } = usePaginatedSwipe({ products });

  const renderContent = () => {
    if (isLoading) {
      return (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" />
        </View>
      );
    }

    if (error) {
      return (
        <View className="flex-1 items-center justify-center">
          <Text>Failed to load products</Text>
        </View>
      );
    }

    return (
      <GestureDetector gesture={panGesture}>
        <View className="flex-1">
          <ProductGrid ListHeaderComponent={<PromoBanner />} products={visibleProducts} />
        </View>
      </GestureDetector>
    );
  };

  return (
    <View className="flex-1 bg-gray-100">
      <SafeAreaView className="flex-1" edges={['top']}>
        <Header />
        {renderContent()}
      </SafeAreaView>

      <BottomNavigation activeIndex={0} />
    </View>
  );
};

export default Home;
