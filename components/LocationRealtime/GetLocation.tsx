import React, { useEffect, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { icons } from '../../assets/images';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import { LocationObject } from 'expo-location';
import { PermissionStatus } from 'expo-permissions';
import { ScreenProps } from 'Stacks/types';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { colors } from '../styled';


const GetLocation: React.FC = () => {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [address, setAddress] = useState<any>(null);
  const [preciseAddress, setPreciseAddress] = useState<string>("");
  const [location, setLocation] = useState<LocationObject | null>(null);
  const darkMode = useSelector((state: RootState) => state.data.darkMode);

  console.log(location);
  console.log(address);

  const navigation = useNavigation();


  const requestLocationPermission = async() => {
    let { status } = await Location.getForegroundPermissionsAsync();
    if (status !== 'granted') {
      let { status: newStatus } = await Location.requestForegroundPermissionsAsync();
      if (newStatus !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
    }

    try {
      let locationData = await Location.getCurrentPositionAsync({});
      setLocation(locationData);

      let geocode = await Location.reverseGeocodeAsync({
        latitude: locationData.coords.latitude,
        longitude: locationData.coords.longitude,
      });

      if (geocode.length > 0) {
        const address = geocode[0];
        // Use the address properties as needed
        console.log('geocode: ' + geocode);
        setAddress(address);
      }
    } catch (error: any) {
      setErrorMsg('Error retrieving location: ' + error.message);
      console.log(error);
    }    
  }

  // useEffect(() => {
  //   requestLocationPermission();
  // }, []);  



  
  return (
    <View style={styles.locationContainer}>
      <View>
        <Text style={[styles.title, { color: darkMode ? colors.darkModeGrayText : colors.textGray }]}>Current Location</Text>
        <Pressable
          onPress={() => {
            requestLocationPermission();

          }}
          style={styles.addressContainer}>
          <Image
            source={icons.location}
            resizeMode='contain'
            style={styles.locationIcon}
          />
          <Text style={[styles.locationTxt, { color: darkMode ? colors.white : colors.partialBlack }]}>{!preciseAddress ? "Your location" : preciseAddress}</Text>
          <Image
            source={icons.downArr}
            resizeMode='contain'
            style={styles.dropdown}
          />
        </Pressable>
      </View>
      <Pressable
        // @ts-ignorets-
        onPress={() => navigation.navigate("notification")}
        style={styles.bellContainer}
      >
        {darkMode ? (
          <Image
            source={icons.darkModeBell}
            style={{ width: 24, height: 24 }}
            resizeMode='contain'
          />
        ) : (
          <Image
            source={icons.notification}
            style={{ width: 24, height: 24 }}
            resizeMode='contain'
          />
        )}
      </Pressable>
    </View>
  );
};

export default GetLocation;