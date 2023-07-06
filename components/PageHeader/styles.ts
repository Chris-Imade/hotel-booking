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
        borderStyle: "solid",
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    headerTitle: {
        fontSize: fonts.text.lg,
        fontFamily: fonts.family.bold
    }
}) 