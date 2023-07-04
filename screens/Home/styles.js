import { SCREEN_WIDTH, STYLES, colors, fonts } from "@components/styled";
import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingHorizontal: 20,
        paddingTop: STYLES.paddingTop,
        backgroundColor: "#ffffff"
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20
    },
    headerLeft: {
        fontSize: fonts.text.md,
        fontFamily: fonts.family.bold
    },
    headerRight: {
        color: colors.primary,
        fontSize: fonts.text.sm,
        fontFamily: fonts.family.medium
    },
})