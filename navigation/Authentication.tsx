import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Register } from "../screens/index";
import { Welcome } from "../components/index";

const Authentication: React.FC = () => {

    const AuthStack = createNativeStackNavigator();

    return (
      <AuthStack.Navigator initialRouteName="Register">
        <AuthStack.Screen name="Welcome" component={Welcome} />
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Register" component={Register} />
      </AuthStack.Navigator>
    )
}

export default Authentication;