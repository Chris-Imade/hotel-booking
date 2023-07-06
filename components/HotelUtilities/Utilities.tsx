import React, { useEffect, useState } from "react";
import { Pressable, Text, ScrollView, Image } from "react-native";
import { SCREEN_WIDTH, colors, fonts } from "../styled";
import { icons } from "../../assets/images";
import { utilities } from "../../DATA";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";




const Utilities: React.FC = () => {
  const [dark, setDarkTheme] = useState<boolean>();
  const darkMode = useSelector((state: RootState) => state.data.darkMode);

  useEffect(() => setDarkTheme(darkMode), [darkMode]);

    return (
        <ScrollView
          horizontal
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center"
          }}
          style={{
            width: SCREEN_WIDTH,
            paddingHorizontal: 20,
            marginTop: 16
          }}
        >
          {utilities.map((item, _) => (
            <Pressable
              key={_}
              style={{
                marginHorizontal: _ !== 0 || _ !== utilities.length - 1 ? 8 : 0,
                paddingHorizontal: 12,
                paddingVertical: 8,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: dark ? "#101010" : "rgba(245, 245, 255, 0.70)",
                borderRadius: 8,
              }}
            >
              <Image
                source={
                  item.name === "wifi"
                    ? dark ? icons.lightWifi : icons.wifi
                    : item.name === "breakfast"
                    ? dark ? icons.lightCoffee : icons.coffee
                    : item.type === "rating"
                    ? icons.star
                    : null
                }
                style={{ width: 20, height: 20, marginRight: 8 }}
                resizeMode="contain"
              />
              <Text style={{
                fontFamily: fonts.family.medium,
                fontSize: fonts.text.sm,
                color: dark ? colors.white : colors.darkModeGrayText
              }}>
                {item.name == "breakfast"
                  ? "Free Breakfast"
                  : item.name == "wifi"
                  ? "Free Wifi"
                  : item.type == "rating"
                  ? item.name
                  : null}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
    )
}

export default Utilities;