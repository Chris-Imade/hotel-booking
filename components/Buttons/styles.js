import { Platform, StyleSheet } from "react-native";
import { SCREEN_WIDTH, fonts } from "../styled";

export const styles = StyleSheet.create({
    btnTxt: {
        fontFamily: fonts.family.bold,
        fontSize: fonts.text.md
    },
    button: {
        borderRadius: 12,
        padding: 16,
        width: Platform.OS === "android" ? SCREEN_WIDTH - 40 : Platform.OS === "ios" ? SCREEN_WIDTH - 40 : 327
    }
})