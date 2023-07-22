import React, { memo, useEffect, useState } from "react";
import { 
    View, 
    Text, 
    SafeAreaView, 
    StatusBar, 
    ScrollView, 
    TouchableOpacity 
} from "react-native";
import { styles } from "./styles";
import { 
    CustomCalendar,
    Header,
} from "../../components/index";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { colors } from "@components/styled";

const Schedule: React.FC = () => {
    const [dark, setDark] = useState<boolean>(true);
    const darkMode = useSelector((state: RootState) => state.data.darkMode);

    useEffect(() => setDark(darkMode), [darkMode, dark]);


    let histories = [];

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={dark ? colors.black : colors.white} barStyle={"dark-content"} />
            <Header type={"booking"} title="Schedule" />
            <ScrollView style={styles.scheduleContainer}>
                <CustomCalendar />
                <View style={styles.historyHeader}>
                    <Text style={styles.historyTitle}>Searches</Text>
                    <TouchableOpacity>
                        <Text style={styles.historyDetailTxt}>See all</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default memo(Schedule);