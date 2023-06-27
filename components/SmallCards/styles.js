import { StyleSheet } from "react-native";
import { SCREEN_WIDTH, colors, fonts } from "../styled";

export const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: colors.white,
        elevation: 3,
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        height: ((SCREEN_WIDTH - 100) / 3) + 24,
        borderRadius: 12
    },
    cardContent: {
        marginLeft: 12,
    },
    firstContent: {
        flexDirection: "row",
        alignItems: "center"
    },
    cost: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginLeft: 10,
    },
    costOne: {
        fontFamily: fonts.family.bold,
        color: colors.primary,
    },
    night: {
        color: colors.textGray
    },
    address: {
        color: colors.textGray,
        fontFamily: fonts.family.medium,
        fontSize: fonts.text.sm,
        marginVertical: 12
    },
    hotelName: {
        color: colors.black,
        fontSize: fonts.text.md,
        fontFamily: fonts.family.bold
    },
    rating: {
        flexDirection: "row",
        alignItems: "center"
    },
    ratingTxt: {
        marginLeft: 12,
        color: colors.black,
        fontSize: fonts.text.md,
        fontFamily: fonts.family.bold
    },
    starContainer: {
        flexDirection: "row", alignItems: "center"
    },
})