import { StyleSheet } from "react-native";
import { SCREEN_WIDTH, colors, fonts } from "../styled";

export const styles = StyleSheet.create({
    favContainer: {
        width: 32,
        height: 32,
        borderRadius: 32 / 2,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: colors.gray,
        shadowOffset: {
            height: 1,
            width: 1
        },
        shadowRadius: 3,
        position: 'absolute',
        top: 12,
        right: 12
    },
    imageContainer: {
        height: 259,
    },
    containerImageStyle: {
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    cardWrapper: {
        shadowColor: "#000000",
        elevation: 3,
        alignItems: "center",
        borderRadius: 12,
    },
    initialContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12
    },
    starContainer: {
        flexDirection: "row", justifyContent: "space-between", alignItems: "center"
    },
    hotelName: { 
        fontSize: fonts.text.md,
        fontFamily: fonts.family.bold
    },
    address: {
        fontFamily: fonts.family.medium,
        fontSize: fonts.text.sm,
        marginLeft: 8
    },
    cost: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    costOne: {
        fontFamily: fonts.family.bold,
        color: colors.primary,
    },
    night: {
        fontFamily: fonts.family.semi_bold_italic
    }
})