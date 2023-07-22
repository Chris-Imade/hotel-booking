import React, { memo, useEffect, useState } from 'react';
import {View, StyleSheet, Pressable, TextInput, Image } from 'react-native';
import { styles } from './styles';
import { icons } from '../../assets/images';
import { SCREEN_WIDTH, colors } from '../styled';
import { useNavigation } from '@react-navigation/native';
import { ScreenProps } from 'Stacks/types';
import { addRecent, isSearching, setSearchParams } from '../../Redux/Splice/AppSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../Redux/store";
import { Actionsheet, Box, Button, Center, useDisclose, Text } from 'native-base';
import { SearchFilters } from '../index';

type SearchBarProps = {
    type: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ type }) => {
    const [query, setQuery] = useState<string>("");
    const [dark, setDarkTheme] = useState<boolean>();
    // @ts-ignore
    const searchQuery = useSelector((state: RootState) => state.data.searchParams);
    const recent = useSelector((state: RootState) => state.data.recent);
    const darkMode = useSelector((state: RootState) => state.data.darkMode);
    const { isOpen, onOpen, onClose } = useDisclose();
    // console.log("recent: " + JSON.stringify(recent));
    // console.log("searching: " + searching);
    
    
    useEffect(() => {
        setDarkTheme(darkMode);
        // @ts-ignore
        dispatch(setSearchParams(searchQuery));
        // @ts-ignore
        setQuery(searchQuery);
    }, [darkMode, searchQuery]);

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleHomeSubmit = () => {
        dispatch(setSearchParams(query));
        if(query?.length > 4) dispatch(addRecent({ prevSearch: query, id: recent.length !== 0 ? recent[recent.length - 1].id + 1 : 1 }));
        // @ts-ignore
        navigation.navigate("search", { query });
    }
    
    const handleSearchSubmit = () => {
        dispatch(setSearchParams(query));
        if(query?.length > 4) dispatch(addRecent({ prevSearch: query, id: recent.length !== 0 ? recent[recent.length - 1].id + 1 : 1 }));
    }

    
    return (
        <>
            <View 
                style={[styles.searchBar, { backgroundColor: darkMode ? colors.partialBlack : "rgba(16, 16, 16, 0%)" }]}>
                <View style={[styles.horizontal, { backgroundColor: darkMode ? colors.partialBlack : "rgba(16, 16, 16, 0%)" }]}>
                    <Image 
                        source={icons.search}
                        resizeMode='contain'
                        style={{ width: 20, height: 20 }}
                    />
                    <TextInput 
                        placeholder='Search Hotels' 
                        style={[styles.searchInput, { color: dark ? colors.darkModeGrayText : colors.textGray }]}
                        cursorColor={colors.gray}
                        placeholderTextColor={colors.textGray}
                        // @ts-ignore
                        defaultValue={searchQuery}
                        onChangeText={text => setQuery(text)}
                        onSubmitEditing={type === "Home" ? handleHomeSubmit : type === "Search" ? handleSearchSubmit : () => {}}
                        onFocus={() => {
                            type === "Search" && dispatch(isSearching("typing..."));
                        }}
                        onBlur={() => {
                            type === "Search" && dispatch(isSearching("not typing"));
                        }}
                    />
                </View>
                <Pressable
                    onPress={() => {
                        if(type === "Home") {
                            // @ts-ignore
                            navigation.navigate("search");
                        } else if(type === "Search") {
                            // Activate Action Sheet
                            onOpen();
                        }
        
                    }}
                >
                    <Image 
                        source={icons.filter}
                        resizeMode='contain'
                        style={{ width: 28, height: 28 }}
                    />
                </Pressable>
            </View>

            {/* <Center> */}
                <Actionsheet style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} isOpen={isOpen} onClose={onClose}>
                    <Actionsheet.Content style={{ backgroundColor: dark ? colors.partialBlack : colors.white, opacity: 1 }}>
                        <SearchFilters />
                    </Actionsheet.Content>
                </Actionsheet>
            {/* </Center> */}
        </>
    );
}

export default memo(SearchBar);
