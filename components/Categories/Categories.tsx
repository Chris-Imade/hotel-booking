import React, { useState, memo, useEffect } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { styles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../Redux/Splice/AppSlice";
import { RootState } from "../../Redux/store";
import { colors, fonts } from "@components/styled";
import { countries, catList, sortedList } from "../../DATA";
import { StringProp } from "../../types";


const Categories:React.FC<StringProp> = ({ type }) => {
    const [selectedCat, setSelectedCat] = useState("");
    const [index, setIndex] = useState(0);
    const [dark, setDarkTheme] = useState<boolean>();
    const darkMode = useSelector((state: RootState) => state.data.darkMode);


    useEffect(() => setDarkTheme(darkMode), [darkMode]);

    const dispatch = useDispatch();

    let data = type === "search" ? catList : type === "filterCountry" ? countries : type === "sortedResults" ? sortedList : [];
    

    return(
        <View>
            {type === "search" ? (
                <ScrollView 
                    showsHorizontalScrollIndicator={false}
                    horizontal>
                    {catList.map((item, _) => (
                        <Pressable
                            onPress={() => {
                                setIndex(_);
                                setSelectedCat(item);
                                dispatch(setCategory(item));
                                
                            }}
                            style={{ justifyContent: "center", alignItems: "center" }} key={_}>
                            <Text style={
                                [ index == _ 
                                    ? styles.activeBackground 
                                    : {
                                        backgroundColor: dark ? colors.partialBlack : colors.white,
                                        paddingHorizontal: 20,
                                        paddingVertical: 8,
                                        paddingLeft: 30,
                                        borderRadius: 20,
                                        color: dark ? colors.darkModeGrayText : colors.primary,
                                        borderWidth: 2,
                                        borderColor: dark ? colors.darkModeGrayText : colors.primary,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        fontSize: fonts.text.md,
                                        fontFamily: fonts.family.medium
                                    }, 
                                    { 
                                        marginHorizontal: _ !== 0 ? 10 : 0 
                                    } 
                                ]}>{item}</Text>
                            {/* @ts-ignore */}
                        </Pressable>
                    ))}
                </ScrollView>
            ) : type === "filterCountry" ? (
                <ScrollView 
                    showsHorizontalScrollIndicator={false}
                    horizontal>
                    {countries.map((item, _) => (
                        <Pressable
                            onPress={() => {
                                setIndex(_);
                                
                            }}
                            style={{ justifyContent: "center", alignItems: "center" }} key={_}>
                            <Text style={
                                [ index == _ 
                                    ? styles.activeBackground 
                                    : {
                                        backgroundColor: dark ? colors.partialBlack : colors.white,
                                        paddingHorizontal: 20,
                                        paddingVertical: 8,
                                        paddingLeft: 30,
                                        borderRadius: 20,
                                        color: dark ? colors.darkModeGrayText : colors.primary,
                                        borderWidth: 2,
                                        borderColor: dark ? colors.darkModeGrayText : colors.primary,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        fontSize: fonts.text.md,
                                        fontFamily: fonts.family.medium
                                    }, 
                                    { 
                                        marginHorizontal: _ !== 0 ? 10 : 0 
                                    } 
                                ]}>{item}</Text>
                            {/* @ts-ignore */}
                        </Pressable>
                    ))}
                </ScrollView>
            ) : type === "sortedResults" ? (
                <ScrollView 
                    showsHorizontalScrollIndicator={false}
                    horizontal>
                    {sortedList.map((item, _) => (
                        <Pressable
                            onPress={() => {
                                setIndex(_);
                                
                            }}
                            style={{ justifyContent: "center", alignItems: "center" }} key={_}>
                            <Text style={
                                [ index == _ 
                                    ? styles.activeBackground 
                                    : {
                                        backgroundColor: dark ? colors.partialBlack : colors.white,
                                        paddingHorizontal: 20,
                                        paddingVertical: 8,
                                        paddingLeft: 30,
                                        borderRadius: 20,
                                        color: dark ? colors.darkModeGrayText : colors.primary,
                                        borderWidth: 2,
                                        borderColor: dark ? colors.darkModeGrayText : colors.primary,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        fontSize: fonts.text.md,
                                        fontFamily: fonts.family.medium
                                    }, 
                                    { 
                                        marginHorizontal: _ !== 0 ? 10 : 0 
                                    } 
                                ]}>{item}</Text>
                            {/* @ts-ignore */}
                        </Pressable>
                    ))}
                </ScrollView>
            ) : null}
        </View>
    )
}

export default memo(Categories);