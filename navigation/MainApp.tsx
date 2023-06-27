import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, Text, Image } from "react-native";
import { HomeStack, ScheduleStack } from "./Stacks/index";
import { icons } from "../assets/images/index";

const MainApp: React.FC = () => {

  const BottomTabs = createBottomTabNavigator();

    return (
      <BottomTabs.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if(route.name === "Home") {
            return focused ? (
                <Image style={{ width: 24, height: 24 }} resizeMode={"contain"} source={icons.home_filled} />
              ) : (
                <Image style={{ width: 24, height: 24 }} resizeMode={"contain"} source={icons.home_outlined} />
              )
          } else if(route.name === "Schedule") {
            return focused ? (
                <Image style={{   width: 24, height: 24 }} resizeMode={"contain"} source={icons.calendar_filled} />
              ) : (
                <Image style={{   width: 24, height: 24 }} resizeMode={"contain"} source={icons.calendar_outlined} />
              )
          }
        }
      })}>
        <BottomTabs.Screen options={{ headerShown: false }} name="Home" component={HomeStack} />
        <BottomTabs.Screen options={{ headerShown: false }} name="Schedule" component={ScheduleStack} />
      </BottomTabs.Navigator>
    )
}

export default MainApp;