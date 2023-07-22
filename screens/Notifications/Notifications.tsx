import React, { memo } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { ScreenProps } from "Stacks/types";

const Notifications: React.FC<ScreenProps<"notification">> = () => {
    return (
        <View style={styles.container}>
            <Text>Notification Screen</Text>
        </View>
    )
}

export default memo(Notifications);