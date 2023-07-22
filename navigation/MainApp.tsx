import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { memo, useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { HomeStack, ScheduleStack } from "./Stacks/index";
import { icons } from "../assets/images/index";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { colors } from "@components/styled";

const MainApp: React.FC = () => {
  const [dark, setDark] = useState<boolean>();
  const darkMode = useSelector((state: RootState) => state.data.darkMode);

  useEffect(() => setDark(darkMode), [darkMode]);

  const BottomTabs = createBottomTabNavigator();

    return (
      <BottomTabs.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if(route.name === "Home") {
            return focused ? (
                <View>
                  <Image style={{ width: 24, height: 24 }} resizeMode={"contain"} source={icons.home_filled} />
                </View>
              ) : (
                <View>
                  <Image style={{ width: 24, height: 24 }} resizeMode={"contain"} source={icons.home_outlined} />
                </View>
              )
          } else if(route.name === "Schedule") {
            return focused ? (
                <View>
                  <Image style={{   width: 24, height: 24 }} resizeMode={"contain"} source={icons.calendar_filled} />
                </View>
              ) : (
                <View>
                  <Image style={{   width: 24, height: 24 }} resizeMode={"contain"} source={icons.calendar_outlined} />
                </View>
              )
          }
        },
        tabBarStyle: {
          backgroundColor: colors.black,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          
        },
        tabBarShowLabel: false,
        freezeOnBlur: true,

      })}>
        <BottomTabs.Screen options={{ headerShown: false }} name="Home" component={HomeStack} />
        <BottomTabs.Screen options={{ headerShown: false }} name="Schedule" component={ScheduleStack} />
      </BottomTabs.Navigator>
    )
}

export default memo(MainApp);