import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity } from "react-native";
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import { colors } from '@components/styled';


const GoogleLogin = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
            webClientId: '668137394276-a8pegt2hlmmi0ld3huha5cgtgaudhsr1.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
            offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
            forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
            iosClientId: '668137394276-uth9h79mom17mrta2l310c5n4ipcar1s.apps.googleusercontent.com', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
            profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
        });
    }, []);

    const signIn = async () => {
        try {
          await GoogleSignin?.hasPlayServices();
          const userInfo = await GoogleSignin?.signIn();
          setUser(userInfo);
        } catch (error) {
          if (error?.code === statusCodes?.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
            console.log("User cancelled the flow!");
          } else if (error.code === statusCodes?.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
            console.log("Operation in progress!");
          } else if (error.code === statusCodes?.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
            console.log("Play service not available or outdated!");
          } else {
            // some other error happened
          }
          console.log(error);
        }
      };

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: colors.primary }}>
          <GoogleSigninButton
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={signIn}
          />
        </View>
    )
}

export default GoogleLogin;