import React, { memo, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Platform, StatusBar, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as AuthSession from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';

import { SCREEN_WIDTH, colors } from '@components/styled';
import { icons } from '../../assets/images';


const GoogleLogin = () => {
  const [userInfo, setUserInfo] = useState();
  const [auth, setAuth] = useState();
  const [requireRefresh, setRequireRefresh] = useState(false);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "668137394276-b92qm7gd4j4b4gk2uekm8e6jt93efckn.apps.googleusercontent.com",
    iosClientId: "668137394276-uth9h79mom17mrta2l310c5n4ipcar1s.apps.googleusercontent.com",
    expoClientId: "668137394276-a8pegt2hlmmi0ld3huha5cgtgaudhsr1.apps.googleusercontent.com"
  });

  useEffect(() => {
    console.log(response);
    if (response?.type === "success") {
      setAuth(response.authentication);

      const persistAuth = async () => {
        await AsyncStorage.setItem("auth", JSON.stringify(response.authentication));
      };
      persistAuth();
    }
  }, [response]);

  useEffect(() => {
    const getPersistedAuth = async () => {
      const jsonValue = await AsyncStorage.getItem("auth");
      if (jsonValue != null) {
        const authFromJson = JSON.parse(jsonValue);
        setAuth(authFromJson);
        console.log(authFromJson);

        setRequireRefresh(!AuthSession.TokenResponse.isTokenFresh({
          expiresIn: authFromJson.expiresIn,
          issuedAt: authFromJson.issuedAt
        }));
      }
    };
    getPersistedAuth();
  }, []);

  const getUserData = async () => {
    let userInfoResponse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { Authorization: `Bearer ${auth.accessToken}` }
    });

    userInfoResponse.json().then(data => {
      console.log(data);
      setUserInfo(data);
    });
  };


  const getClientId = () => {
    if (Platform.OS === "ios") {
      return "668137394276-uth9h79mom17mrta2l310c5n4ipcar1s.apps.googleusercontent.com";
    } else if (Platform.OS === "android") {
      return "668137394276-b92qm7gd4j4b4gk2uekm8e6jt93efckn.apps.googleusercontent.com";
    } else if (Platform.OS === "web") {
      return "668137394276-a8pegt2hlmmi0ld3huha5cgtgaudhsr1.apps.googleusercontent.com";
    } else {
      console.log("Invalid platform - not handled");
    }
  }

  const refreshToken = async () => {
    const clientId = getClientId();
    console.log(auth);
    const tokenResult = await AuthSession.refreshAsync({
      clientId: clientId,
      refreshToken: auth.refreshToken
    }, {
      tokenEndpoint: "https://www.googleapis.com/oauth2/v4/token"
    });

    tokenResult.refreshToken = auth.refreshToken;

    setAuth(tokenResult);
    await AsyncStorage.setItem("auth", JSON.stringify(tokenResult));
    setRequireRefresh(false);
  };

  if (requireRefresh) {
    refreshToken();
  }

  const logout = async () => {
    await AuthSession.revokeAsync({
      token: auth.accessToken
    }, {
      revocationEndpoint: "https://oauth2.googleapis.com/revoke"
    });

    setAuth(undefined);
    setUserInfo(undefined);
    // await AsyncStorage.removeItem("auth");

    // make token be null in redux - add this logout btn to the regular logout for email & pass auth -> should basically forget token
  };

  return (
    <TouchableOpacity style={styles.socialLoginContainer}
      onPress={auth ? getUserData : () => promptAsync({ useProxy: false, showInRecents: true })}>
      <Image 
          source={icons.googleIcon}
          style={{ width: 26, height: 26 }}
          resizeMode={"contain"}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
socialLoginContainer: {
  width: (SCREEN_WIDTH - 56) / 3,
  height: 56,
  borderRadius: 8,
  backgroundColor: colors.partialBlack,
  justifyContent: "center",
  alignItems: "center"
},
})

export default memo(GoogleLogin);