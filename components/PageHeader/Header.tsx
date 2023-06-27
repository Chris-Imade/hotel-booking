import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { styles } from './styles';
import { icons } from "../../assets/images/index";

type HeaderProp = {
    title: string;
};

const Header: React.FC<HeaderProp> = ({ title }) => {

    const navigation = useNavigation();

    return (
        <View style={styles.headerContainer}>
            <Pressable
                style={styles.leftArrPressable}
                onPress={() => navigation.canGoBack()}>
                <Image 
                    source={icons.leftArr}
                    style={{ width: 24, height: 24 }}
                />
            </Pressable>
            <View>
                <Text style={styles.headerTitle}>{title}</Text>
            </View>
            <Pressable
                style={styles.leftArrPressable}
                onPress={() => navigation.canGoBack()}>
                <Image 
                    source={icons.more}
                    style={{ width: 24, height: 24 }}
                />
            </Pressable>
        </View>
    )
}

export default Header;