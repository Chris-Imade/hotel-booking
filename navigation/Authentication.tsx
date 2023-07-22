import React, { memo } from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ForgotPassword, Login, NewPassword, OTP, Register, Welcome } from "../screens/index";

const Authentication: React.FC = () => {
  const AuthStack = createNativeStackNavigator();

  return (
    <AuthStack.Navigator
    // initialRouteName="Welcome"
    >
      <AuthStack.Screen 
        name="Login" 
        // @ts-ignore
        component={Login} 
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
      // @ts-ignore
        name="Register" 
        // @ts-ignore
        component={Register} 
        options={{ headerShown: false }}
      />
      <AuthStack.Screen 
        name="Welcome" 
        component={Welcome} 
        options={{ headerShown: false }}
      />
      <AuthStack.Screen 
        name="ForgotPassword" 
        component={ForgotPassword} 
        options={{ headerShown: false }}
      />
      <AuthStack.Screen 
        name="OTP" 
        component={OTP} 
        options={{ headerShown: false }}
      />
      <AuthStack.Screen 
        name="NewPassword" 
        component={NewPassword} 
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};

export default memo(Authentication);
