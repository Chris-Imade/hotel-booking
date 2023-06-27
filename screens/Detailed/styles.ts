import { StyleSheet } from "react-native";
import { SCREEN_WIDTH, colors } from "../../components/styled";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  scrollContainer: {
    width: SCREEN_WIDTH,
    justifyContent: "center",
    alignItems: "center"
  }
})