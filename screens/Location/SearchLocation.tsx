import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { ScreenProps } from "Stacks/types";

const SearchLocation: React.FC<ScreenProps<"search-location">> = () => {
    return (
        <View style={styles.container}>
            <Text>Search Location Screen</Text>
        </View>
    )
}

export default SearchLocation;