import { StyleSheet } from "react-native";
import { 
    colors, 
    fonts 
} from "../../components/styled";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        // justifyContent: "center",
        // alignItems: "center",
    },
    scheduleContainer: {
        marginHorizontal: 20
    },
    historyHeader: {
        marginTop: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    historyTitle: {
        fontFamily: fonts.family.bold,
        fontSize: fonts.text.lg,
        color: colors.black
    },
    historyDetailTxt: {
        color: colors.primary,
        fontFamily: fonts.family.medium,
        fontSize: fonts.text.md
    }
})