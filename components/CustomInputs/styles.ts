import { StyleSheet } from "react-native";
import { colors } from "@components/styled";

export const styles = StyleSheet.create({
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
    passwordContainer: {
        position: "relative"
    },
    passwordInput: {
        position: "absolute",
        right: 18.2,
        top: 24
    }
});