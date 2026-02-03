import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  cardContainer: {
    maxWidth: "47%",
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  imagePlaceholder: {
    width: "100%",
    height: 130,
  },
  image: {
    width: "100%",
    height: 130,
    borderRadius: 8,
  },
});
