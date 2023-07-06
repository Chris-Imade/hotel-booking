import { StyleSheet } from "react-native";
import { SCREEN_WIDTH, colors, fonts } from "@components/styled";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.black
    },
    title: {
        fontFamily: fonts.family.bold,
        fontSize: fonts.text.h4,
        color: colors.white,
        marginTop: 35,
        marginBottom: 8
    },
    body: {
        width: SCREEN_WIDTH - 150,
        color: colors.darkModeGrayText,
        fontFamily: fonts.family.medium,
        textAlign: "center",
        fontSize: fonts.text.md,
        marginBottom: 40
    }
});