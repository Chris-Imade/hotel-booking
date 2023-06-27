import { StyleSheet } from "react-native";
import { colors, fonts } from "../styled";

export const styles = StyleSheet.create({
    locationContainer: { 
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 20,
    },
    title: {
        fontSize: fonts.text.sm,
        fontFamily: fonts.family.medium,
    },
    bellContainer: { 
        width: 40, 
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        borderColor: colors.lightBorder,
        borderWidth: 1
    },
    addressContainer: {
        flexDirection: "row",
        alignItems: 'center',
        marginTop: 4.5
    },
    locationIcon: {
        width: 20,
        height: 20,
        marginRight: 8
    },
    locationTxt: {
        fontSize: fonts.text.md,
        fontFamily: fonts.family.medium
    },
    dropdown: {
        width: 20,
        height: 20,
        marginLeft: 2
    }
});