import React from "react";
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

const Schedule: React.FC = () => {
    let histories = [];

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
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

export default Schedule;