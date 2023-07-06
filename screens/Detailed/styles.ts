import { StyleSheet } from "react-native";
import { SCREEN_WIDTH, colors, fonts } from "../../components/styled";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    width: SCREEN_WIDTH,
    justifyContent: "center",
    alignItems: "center",
  },
  /* Address | Hotel name | Price - Section */
  detailContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 16,
  },
  detailTitle: {
    fontSize: fonts.text.lg,
    fontFamily: fonts.family.bold,
  },
  addressContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  addrTxt: {
    fontSize: fonts.text.sm,
    fontFamily: fonts.family.regular,
    marginLeft: 8,
  },
  cost: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  costOne: {
    fontFamily: fonts.family.bold,
    color: colors.primary,
  },
  /* Ends HERE - Address | Hotel name | Price - Section */
  descContainer: {
    marginHorizontal: 20,
    marginTop: 16,
  },
  descTitle: {
    color: colors.black,
    fontSize: fonts.text.lg,
    fontFamily: fonts.family.bold,
    marginBottom: 12
  },
  descContent: {
    fontSize: fonts.text.sm,
    lineHeight: 20
  },
  readme: {
    color: colors.primary,
    fontSize: fonts.text.sm,
    fontFamily: fonts.family.bold
  },
  excertContainer: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  previewImgs: {
    width: 98,
    height: 82,
    borderRadius: 8
  },
  btnContainer: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30
  }
});
