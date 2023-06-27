import { Platform, StyleSheet } from "react-native";
import { SCREEN_WIDTH } from "../styled";

export const styles = StyleSheet.create({
    btnTxt: {
        fontFamily: "Medium-Jakarta",
        fontSize: 14
    },
    button: {
        borderRadius: 12,
        padding: 16,
        width: Platform.OS === "android" ? SCREEN_WIDTH - 40 : Platform.OS === "ios" ? SCREEN_WIDTH - 40 : 327
    }
})