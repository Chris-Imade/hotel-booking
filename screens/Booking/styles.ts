import { StyleSheet } from "react-native";
import { 
    SCREEN_HEIGHT,
    SCREEN_WIDTH, 
    colors, 
    fonts 
} from "../../components/styled";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    divider: {
        backgroundColor: colors.gray,
        height: 1,
        width: SCREEN_WIDTH,
        marginTop: 34
    },
    totalCostContainer: {
        marginTop: 16,
        marginHorizontal: 20,
    },
    totalCostTxt: {
        fontFamily: fonts.family.bold,
        fontSize: fonts.text.lg
    },
    innerContainer: {
        marginTop: 8
    },
    formatTotal: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    leftText: {
        fontSize: fonts.text.sm,
        fontFamily: fonts.family.medium
    },
    rightText: {
        fontSize: fonts.text.md,
        fontFamily: fonts.family.bold
    },
    warningContainer: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginTop: 8
    },
    warningText: {
        fontFamily: fonts.family.regular,
        color: colors.textGray,
        fontSize: fonts.text.sm,
        width: SCREEN_WIDTH - 80
    },
    bottomButtonContainer:  {
        // remove this ...along with
        justifyContent: "center",
        alignItems: "center",
        width: SCREEN_WIDTH,
        paddingVertical: 8,
        marginBottom: 30,
        marginTop: 16
    }
});