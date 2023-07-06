import { StyleSheet } from "react-native";
import { 
    SCREEN_WIDTH, 
    colors, 
    fonts 
} from "@components/styled";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
    loginGreeting: {
        color: colors.white,
        fontFamily: fonts.family.bold,
        fontSize: fonts.text.h4,
        width: SCREEN_WIDTH - 150,
    },
    marginContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
        marginBottom: 22
    },
    margin: {
        width: (SCREEN_WIDTH - 80) / 3,
        backgroundColor: colors.darkModeGrayText,
        height: 1
    },
    marginTxt: {
        color: colors.darkModeGrayText,
        marginHorizontal: 20,
        fontFamily: fonts.family.semi_bold,
        fontSize: fonts.text.md
    },
    socialWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    socialLoginContainer: {
        width: (SCREEN_WIDTH - 56) / 3,
        height: 56,
        borderRadius: 8,
        backgroundColor: colors.partialBlack,
        justifyContent: "center",
        alignItems: "center"
    },
    bottomRoute: {
        width: SCREEN_WIDTH, 
        marginTop: 160,
        alignItems: "center"
    },
    bottomRouteMainTxt: {
        color: colors.darkModeGrayText,
        fontSize: fonts.text.lg,
        fontFamily: fonts.family.medium
    },
    bottomRouteMinorTxt: {
        color: colors.primary,
        marginLeft: 8,
        fontFamily: fonts.family.bold,
        fontSize: fonts.text.lg
    }
})