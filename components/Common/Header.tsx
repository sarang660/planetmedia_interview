import { View, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { colors } from "@/styles/colors";

interface HeaderProps {
  onBackPress?: () => void;
  onNotificationPress?: () => void;
}

const Header = ({
  onBackPress,
  onNotificationPress,
}: HeaderProps) => (
  <View className="flex-row items-center justify-between px-4 py-3 bg-white">
    <TouchableOpacity className="p-2" onPress={onBackPress}>
      <Ionicons color={colors.black} name="chevron-back" size={24} />
    </TouchableOpacity>

    <TouchableOpacity className="p-2" onPress={onNotificationPress}>
      <Ionicons color={colors.black} name="notifications-outline" size={24} />
    </TouchableOpacity>
  </View>
);

export default Header;
