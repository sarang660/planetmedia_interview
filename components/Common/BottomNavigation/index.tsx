
import { View, TouchableOpacity } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import { LinearGradient } from "expo-linear-gradient";

import { Ionicons } from "@expo/vector-icons";

import { colors, gradients } from "@/styles/colors";

import { navItems } from "./constants";
import ExpandableButton from "./ExpandableButton";
import { styles } from "./styles";



interface BottomNavigationProps {
  activeIndex?: number;
  onActionPress?: (index: number) => void;
  onCenterPress?: () => void;
  onTabPress?: (index: number) => void;
}

const BottomNavigation = ({
  activeIndex = 0,
  onActionPress,
  onCenterPress,
  onTabPress,
}: BottomNavigationProps) => {
  const insets = useSafeAreaInsets();
  const { floatingButtonContainer, buttonBackdrop, navSection, navItem, linearGradient, centerSpacer } = styles;

  return (
    <View className="relative">
      <View
        className="absolute -top-7 left-1/2 z-10"
        style={floatingButtonContainer}
      >
        <View style={buttonBackdrop} />
        <ExpandableButton
          onActionPress={onActionPress}
          onCenterPress={onCenterPress}
        />
      </View>

      <LinearGradient
        colors={[...gradients.bottomNav]}
        end={{ x: 1, y: 0 }}
        start={{ x: 0, y: 0 }}
        style={[linearGradient, { paddingBottom: insets.bottom + 16 }]}
      >
        <View style={navSection}>
          {navItems.slice(0, 2).map(({ label, icon }, index) => (
            <TouchableOpacity
              key={label}
              style={navItem}
              onPress={() => onTabPress?.(index)}
            >
              <Ionicons
                name={icon}
                size={24}
                color={
                  activeIndex === index ? colors.white : colors.whiteTransparent
                }
              />
            </TouchableOpacity>
          ))}
        </View>

        <View style={centerSpacer} />

        <View style={navSection}>
          {navItems.slice(2).map(({ label, icon }, index) => (
            <TouchableOpacity
              key={label}
              style={navItem}
              onPress={() => onTabPress?.(index + 2)}
            >
              <Ionicons
                name={icon}
                size={24}
                color={
                  activeIndex === index + 2
                    ? colors.white
                    : colors.whiteTransparent
                }
              />
            </TouchableOpacity>
          ))}
        </View>
      </LinearGradient>
    </View>
  );
};

export default BottomNavigation;
