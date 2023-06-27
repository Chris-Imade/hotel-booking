import React, { memo, useRef, useState } from "react";
import {
  View,
  Text,
  ImageSourcePropType,
  StatusBar,
  Image,
  Pressable,
  ScrollView,
  FlatList,
} from "react-native";
import { styles } from "./styles";
import { Carousel, Header } from "../../components";
import { SCREEN_WIDTH, colors, fonts } from "../../components/styled";
import { icons, images } from "../../assets/images";
import { DetailedImageProps, UtilitiesProp } from "../../types";

// interface DetailedProps {
//     hotel: {
//         image?: ImageSourcePropType;
//         name?: string;
//         rating?: string;
//         address?: string;
//         pricePerNight?: number;
//     }
// }

const imagesData: DetailedImageProps = [
  { id: 1, image: images.hotel1 },
  { id: 2, image: images.hotel2 },
  { id: 3, image: images.hotel3 },
  { id: 4, image: images.hotel4 },
  { id: 5, image: images.hotel5 },
  //   { id: 6, image: images.hotel6 },
];

const utilities: UtilitiesProp = [
  { id: 1, name: "wifi", type: "utility" },
  { id: 2, name: "breakfast", type: "service" },
  { id: 3, type: "rating", name: "5.0" },
];

const Detailed: React.FC = (props) => {
  // @ts-ignore
  // const { params } = props?.route;

  // console.log(params);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={colors.white} />
      <Header title={"Detail"} />
      <ScrollView>
        <Carousel data={imagesData} />
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
      </ScrollView>
    </View>
  );
};

export default memo(Detailed);