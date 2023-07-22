import { Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native'
import React, { memo, useEffect, useState } from 'react';
import { styles } from "./styles";
import { icons, images } from '../../assets/images';
import { SCREEN_WIDTH, colors, fonts } from '../styled';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';


const Card = ({ hotel, type }) => {
  const [liked, setLiked] = useState(false);
  const [dark, setDarkTheme] = useState();
  const darkMode = useSelector((state) => state.data.darkMode);

  const dispatch = useDispatch();

  const navigation = useNavigation();

  useEffect(() => setDarkTheme(darkMode), [darkMode]);

  const handlePress = () => {
    navigation.navigate("detailed-screen", hotel);
  }

  

  return (
    <Pressable  
      onPress={handlePress}
      style={[ 
        styles.cardWrapper, 
        { width: type === "Home" ? 257 : type === "Search" ? SCREEN_WIDTH - 40 : null },
        { marginLeft: type === "Home" ? 5 : 0 },
        { marginBottom: type === "Home" ? 10 : type === "Search" ? 20 : 0 },
        { height: type === "Home" ? 359 : type === "Search" ? (359 + 15) : null },
        { backgroundColor: dark ? colors.partialBlack : colors.white }
      ]}>
      <ImageBackground 
        source={hotel.image}
        style={[
          styles.imageContainer, 
          { width: "100%" } 
        ]}
        imageStyle={styles.containerImageStyle}
      >
        <Pressable 
          onPress={() => setLiked(!liked)}
          style={{ 
            width: 32, height: 32,
            backgroundColor: colors.white, 
            position: "absolute",
            borderRadius: 32 / 2,
            justifyContent: "center",
            alignItems: "center",
            top: 12,
            right: 12
          }}>
            {liked ? (
              <Image 
                source={icons.favorite_active}
                style={{
                  width: 20,
                  height: 20
                }}
              />
            ) : (
              <Image 
                source={icons.favorite_inactive}
                style={{
                  width: 20,
                  height: 20
                }}
              />
            )}   
        </Pressable>
      </ImageBackground>
      <View style={[
        { padding: type === "Home" ? 12 : type === "Search" ? 15 : 0 },
        { width: type === "Home" ? 257 : type === "Search" ? "100%" : null }
      ]}>
      <View style={styles.initialContent}>
        <Text style={[styles.hotelName, { color: dark ? colors.white : colors.black }]}>{hotel.name}</Text>
        <View style={styles.starContainer}>
          <Image 
            source={icons.star}
            style={{
              width: 20,
              height: 20
            }}
          />
          <Text style={[styles.hotelName, { color: dark ? colors.white : colors.black }]}>{hotel.rating}</Text>
        </View>
        </View>
        <View style={{ 
          marginBottom: 8,
          flexDirection: "row"
        }}>
          <Image 
            source={icons.location}
            style={{
              width: 18,
              height: 18
            }}
          />
          <Text style={[styles.address, { color: dark ? colors.darkModeGrayText : colors.textGray }]}>{hotel.address}</Text>
        </View>
      </View>
    </Pressable>
  )
}

export default memo(Card);