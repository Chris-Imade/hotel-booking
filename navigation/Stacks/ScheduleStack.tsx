import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { 
    Schedule
} from "../../screens/index";

const ScheduleStack: React.FC = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="schedule-screen" component={Schedule} />
        </Stack.Navigator>
    )
}

export default ScheduleStack;