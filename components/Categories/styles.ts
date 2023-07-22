import { StyleSheet } from "react-native";
import { colors, fonts } from "../styled";

export const styles = StyleSheet.create({
    activeBackground: {
        backgroundColor: colors.primary,
        paddingHorizontal: 20,
        paddingVertical: 8,
        paddingLeft: 30,
        borderRadius: 20,
        color: colors.white,
        borderWidth: 2,
        borderColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
        fontSize: fonts.text.md,
        fontFamily: fonts.family.medium
    },
})