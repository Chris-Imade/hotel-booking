import { StyleSheet } from "react-native";
import { colors, fonts } from "@components/styled";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        flex: 1
    },
    btnContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    topText: {
        fontFamily: fonts.family.bold,
        fontSize: fonts.text.h4,
        color: colors.white,
    },
    bottomText: {
        color: colors.darkModeGrayText,
        fontSize: fonts.text.lg,
        fontFamily: fonts.family.medium,
        marginTop: 10,
        marginBottom: 32
    },
    textInputs: {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#E8ECF4",
        borderRadius: 8,
        marginBottom: 15,
        paddingLeft: 18,
        padding: 18,
        color: colors.darkModeGrayText
    },
})