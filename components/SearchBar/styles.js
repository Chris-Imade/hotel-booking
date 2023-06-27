import { StyleSheet } from "react-native";
import { SCREEN_WIDTH, colors } from "../styled";

export const styles = StyleSheet.create({
    searchBar: {
        flexDirection: "row",
        padding: 12,
        alignItems: "center",
        justifyContent: "space-between",
        height: 52,
        borderColor: colors.mainBorder,
        borderWidth: 1,
        borderRadius: 8
    },
    searchInput: {
        marginLeft: 10,
        width: SCREEN_WIDTH - 136,
    },
    horizontal: {
        flexDirection: "row",
        alignItems: "center",
    }
});