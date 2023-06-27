import { StyleSheet } from "react-native";
import { colors, fonts } from "../styled";

export const styles = StyleSheet.create({
    headerContainer: {
        marginVertical: 12,
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    leftArrPressable: {
        padding: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.lightBorder,
        borderStyle: "solid",
        backgroundColor: colors.white,
        width: 40,
        height: 40
    },
    headerTitle: {
        fontSize: fonts.text.lg,
        fontFamily: fonts.family.bold
    }
}) 