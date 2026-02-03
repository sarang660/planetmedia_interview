import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  floatingButtonContainer: {
    marginLeft: -28,
  },
  buttonBackdrop: {
    position: "absolute",
    width: 68,
    height: 37,
    backgroundColor: colors.gray100,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    bottom: -5,
    left: -6,
  },
  linearGradient: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 16,
  },
  navSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  centerSpacer: {
    width: 56,
  },
});
