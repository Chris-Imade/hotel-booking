import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

const Welcome: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text>Welcome Screen</Text>
        </View>
    )
}

export default Welcome;