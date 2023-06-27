import { StyleSheet, Platform } from "react-native";
import { SCREEN_WIDTH, STYLES, colors, fonts } from "@components/styled";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? 45 
        : Platform.OS === "ios" ? 36 
        : undefined,
        backgroundColor: colors.white
    },
    searchBarContainer: {
        marginHorizontal: 20,
        marginBottom: 20
    },
    resultInfo: {
        marginHorizontal: 20,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    resultText: {
        fontFamily: fonts.family.bold,
        color: colors.black
    },
    layout: {
        flexDirection: "row",
        alignItems: "center"
    },
    containerRecent: {
        marginHorizontal: 20,
        paddingTop: 10
    },
    borderRecent: {
        width: SCREEN_WIDTH - 40,
        height: 2,
        backgroundColor: colors.customGray,
        marginBottom: 20
    },
    recent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    recentTxt: {
        color: colors.customGray,
        fontSize: fonts.text.md,
        fontFamily: fonts.family.medium
    },
    delete: {
        color: colors.customGray,
        justifyContent: "center",
        alignItems: "center",
    },
    deleteContainer: {
        borderWidth: 2,
        borderColor: colors.customGray,
        borderRadius: 5,
        // justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        paddingHorizontal: 6,
        paddingVertical: 0.5,
        paddingBottom: 2
    }
})