import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { memo } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList, ScreenProps } from "./types";
import {
  BookNow,
  Detailed,
  Home,
  HotelsNearby,
  Notifications,
  Search,
  SearchLocation,
} from "../../screens/index";

const HomeStack: React.FC = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="home-screen"
        component={Home}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="search"
        component={Search}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="search-location"
        component={SearchLocation}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="hotels-nearby"
        component={HotelsNearby}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="notification"
        component={Notifications}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="detailed-screen"
        component={Detailed}
      />
      <Stack.Screen 
        options={{ headerShown: false }}
        name="book-now"
        component={BookNow}
      />
    </Stack.Navigator>
  );
};

export default memo(HomeStack);