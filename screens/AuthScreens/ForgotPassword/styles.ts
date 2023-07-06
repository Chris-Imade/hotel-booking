import { StyleSheet } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH, colors, fonts } from "../../../components/styled";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        flex: 1
    },
    top: {

    },
    bottom: {
        height: SCREEN_HEIGHT / 2,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    topText: {
        fontFamily: fonts.family.bold,
        fontSize: fonts.text.h4,
        color: colors.white,
    },
    topBottomText: {
        color: colors.darkModeGrayText,
        fontSize: fonts.text.lg,
        fontFamily: fonts.family.medium,
        marginTop: 10,
    },
    bottomRouteMainTxt: {
        color: colors.darkModeGrayText,
        fontSize: fonts.text.lg,
        fontFamily: fonts.family.medium
    },
    bottomRouteMinorTxt: {
        color: colors.primary,
        marginLeft: 8,
        fontFamily: fonts.family.bold,
        fontSize: fonts.text.lg
    }
});