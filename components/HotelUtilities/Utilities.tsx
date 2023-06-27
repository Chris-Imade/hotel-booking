import React from "react";
import { Pressable, Text, ScrollView, Image } from "react-native";
import { SCREEN_WIDTH, fonts } from "../styled";
import { icons } from "../../assets/images";
import { utilities } from "../../DATA";




const Utilities: React.FC = () => {
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
                backgroundColor: "rgba(245, 245, 255, 0.70)",
                borderRadius: 8,
              }}
            >
              <Image
                source={
                  item.name === "wifi"
                    ? icons.wifi
                    : item.name === "breakfast"
                    ? icons.coffee
                    : item.type === "rating"
                    ? icons.star
                    : null
                }
                style={{ width: 20, height: 20, marginRight: 8 }}
                resizeMode="contain"
              />
              <Text style={{
                fontFamily: fonts.family.medium,
                fontSize: fonts.text.sm
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