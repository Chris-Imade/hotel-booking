import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { ScreenProps } from "Stacks/types";

const HotelsNearby: React.FC<ScreenProps<"hotels-nearby">> = () => {
    return (
        <View style={styles.container}>
            <Text>Nearby Screen</Text>
        </View>
    )
}

export default HotelsNearby;