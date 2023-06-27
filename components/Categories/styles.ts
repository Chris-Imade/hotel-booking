import { StyleSheet } from "react-native";
import { colors, fonts } from "../styled";

export const styles = StyleSheet.create({
    inActiveBackground: {
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        paddingVertical: 8,
        paddingLeft: 30,
        borderRadius: 20,
        color: colors.primary,
        borderWidth: 2,
        borderColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
        fontSize: fonts.text.md,
        fontFamily: fonts.family.medium
    },
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