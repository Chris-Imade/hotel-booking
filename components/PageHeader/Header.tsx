import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { styles } from './styles';
import { icons } from "../../assets/images/index";
import { colors } from "@components/styled";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

type HeaderProp = {
    title?: string;
    type?: string;
};

const Header: React.FC<HeaderProp> = ({ title, type }) => {
    const [dark, setDarkTheme] = useState<boolean>();
    const darkMode = useSelector((state: RootState) => state.data.darkMode);
  
    useEffect(() => setDarkTheme(darkMode), [darkMode]);

    const navigation = useNavigation();

    return (
        <>
            {type === "auth" ? (
                <View style={styles.headerContainer}>
                    <Pressable
                        style={[
                            {
                                borderColor: colors.lightBorder,
                                backgroundColor: colors.black
                            }, styles.leftArrPressable
                        ]}
                        onPress={() => navigation.goBack()}>
                        <Image 
                            source={icons.darkModeBackArr}
                            style={{ width: 24, height: 24 }}
                        />
                    </Pressable>
                    <View style={{ width: 50, height: 10 }} />
                    <View style={{ width: 50, height: 10 }} />
                </View>
            ) : (
                <View style={styles.headerContainer}>
                    <Pressable
                        style={[
                            {
                                borderColor: colors.lightBorder,
                                backgroundColor: dark ? colors.black : colors.white
                            }, styles.leftArrPressable
                        ]}
                        onPress={() => navigation.goBack()}>
                        <Image 
                            source={dark ? icons.darkModeBackArr : icons.leftArr}
                            style={{ width: 24, height: 24 }}
                        />
                    </Pressable>
                    <View>
                        <Text style={[styles.headerTitle, { color: dark ? colors.white : colors.black }]}>{title}</Text>
                    </View>
                    <Pressable
                        style={[
                            {
                                borderColor: colors.lightBorder,
                                backgroundColor: dark ? colors.black : colors.white
                            }, styles.leftArrPressable
                        ]}
                        onPress={() => {}}>
                        {type === "booking" ? (
                            <Image 
                                source={dark ? icons.lightSettings : icons.setting}
                                style={{ width: 24, height: 24 }}
                            />
                        ) : (
                            <Image 
                                source={dark ? icons.lightMore : icons.more}
                                style={{ width: 24, height: 24 }}
                            />
                        )}
                    </Pressable>
                </View>
            )}
        </>
    )
}

export default Header;