import { StyleSheet } from "react-native";
import { SCREEN_WIDTH, colors, fonts } from "@components/styled";

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    headerTxt: {
        fontSize: fonts.text.lg,
        fontFamily: fonts.family.bold,
        textAlign: "center"
    },
    seperator: {
        height: 0.1,
        width: SCREEN_WIDTH - 40,
        backgroundColor: colors.mainBorder,
        marginTop: 30
    },
    flexBtwn: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 20
    },
    title: {
        fontFamily: fonts.family.bold,
        fontSize: fonts.text.md,
    },
    detail: {
        fontFamily: fonts.family.bold,
        fontSize: fonts.text.md,
        color: colors.primary
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
});