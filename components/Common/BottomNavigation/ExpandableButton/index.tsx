import { useState } from "react";

import { TouchableOpacity, View } from "react-native";

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "@/styles/colors";

import { styles, SPREAD_RADIUS } from "./styles";

interface ActionItem {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
}

const actionItems: ActionItem[] = [
  { icon: "shopping-outline" },
  { icon: "hand-coin-outline" },
  { icon: "ticket-percent-outline" },
  { icon: "wallet-outline" },
];

const getActionPosition = (index: number) => {
  const totalItems = actionItems.length;
  const startAngle = -150;
  const endAngle = -30;
  const angleStep = (endAngle - startAngle) / (totalItems - 1);
  const angle = startAngle + index * angleStep;
  const angleRad = (angle * Math.PI) / 180;
  return {
    x: SPREAD_RADIUS * Math.cos(angleRad),
    y: SPREAD_RADIUS * Math.sin(angleRad),
  };
};

interface ExpandableButtonProps {
  onActionPress?: (index: number) => void;
  onCenterPress?: () => void;
}

const ExpandableButton = ({
  onActionPress,
  onCenterPress,
}: ExpandableButtonProps) => {
  const [expanded, setExpanded] = useState(false);

  const { container, mainButton, actionButton, actionTouchable } = styles;

  const handleCenterPress = () => {
    setExpanded(!expanded);
    onCenterPress?.();
  };

  const handleActionPress = (index: number) => {
    setExpanded(false);
    onActionPress?.(index);
  };

  return (
    <View style={container}>
      {expanded &&
        actionItems.map(({icon}, index) => {
          const position = getActionPosition(index);
          return (
            <View
              key={icon}
              style={[
                actionButton,
                {
                  transform: [
                    { translateX: position.x },
                    { translateY: position.y },
                  ],
                },
              ]}
            >
              <TouchableOpacity
                style={actionTouchable}
                onPress={() => handleActionPress(index)}
              >
                <MaterialCommunityIcons
                  color={colors.primary}
                  name={icon}
                  size={20}
                />
              </TouchableOpacity>
            </View>
          );
        })}

      <TouchableOpacity style={mainButton} onPress={handleCenterPress}>
        <Ionicons color={colors.primary} name="menu" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default ExpandableButton;
