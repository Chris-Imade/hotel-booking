import React, { memo, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  ImageSourcePropType,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import { Carousel, CustomButton, Header, Utilities } from "../../components";
import { colors, fonts } from "../../components/styled";
import { description, imagesData } from "../../DATA";
import { icons } from "../../assets/images";
import { ScreenProps } from "Stacks/types";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

const Detailed: React.FC<ScreenProps<"detailed-screen">> = (props) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const [dark, setDarkTheme] = useState<boolean>();
  const darkMode = useSelector((state: RootState) => state.data.darkMode);

  useEffect(() => setDarkTheme(darkMode), [darkMode]);

  return (
    <View style={[styles.container, { backgroundColor: dark ? colors.black : colors.white }]}>
      <StatusBar barStyle={dark ? "light-content" : "dark-content"} backgroundColor={dark ? colors.black : colors.white} />
      <Header title={"Detail"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Carousel data={imagesData} />
        <Utilities />
        {/* Address | Hotel name | Price - Section */}
        <View style={styles.detailContainer}>
          <View>
            <Text style={[styles.detailTitle, { color: dark ? colors.white : colors.black }]}>The Aston Vill Hotel</Text>
            <View style={styles.addressContainer}>
              <Image
                source={icons.location}
                style={{ width: 18, height: 18 }}
              />
              <Text style={[styles.addrTxt, { color: dark ? colors.darkModeGrayText : colors.textGray }]}>
                Alice Springs NT 0870, Australia
              </Text>
            </View>
          </View>
          <View style={styles.cost}>
            <Text style={styles.costOne}>{"₦" + 30 + "K"}</Text>
            <View style={{ width: 5 }} />
            <Text style={[{ color: dark ? colors.darkModeGrayText : colors.textGray }]}>/night</Text>
          </View>
        </View>
        {/* Ends HERE - Address | Hotel name | Price - Section */}

        {/* Begins - Description Section */}
        <View style={styles.descContainer}>
          <Text style={styles.descTitle}>Description</Text>
          <View style={styles.excertContainer}>
            {showMore ? (
              <Text style={[styles.descContent, { color: dark ? colors.darkModeGrayText : colors.textGray }]}>
                {description.mainContent + "..."}
                <Text onPress={() => setShowMore(false)} style={styles.readme}>
                  Show Less
                </Text>
              </Text>
            ) : (
              <Text style={[styles.descContent, { color: dark ? colors.darkModeGrayText : colors.textGray }]}>
                {description.descExcert + "..."}
                <Text onPress={() => setShowMore(true)} style={styles.readme}>
                  Read More
                </Text>
              </Text>
            )}
          </View>
        </View>
        {/* Ends - Description Section */}

        {/* Begins - Preview */}
        <View style={styles.descContainer}>
          <Text style={styles.descTitle}>Preview</Text>
          <ScrollView 
          showsHorizontalScrollIndicator={false}
          horizontal>
            {imagesData.map((item, _) => (
              <Image
                key={_}
                source={item.image}
                resizeMode="cover"
                style={[
                    styles.previewImgs,
                    // @ts-ignore
                  {
                    marginHorizontal:
                      _ !== 0 ? 8 : _ !== imagesData.length - 1 ? 8 : null,
                  },
                ]}
              />
            ))}
          </ScrollView>
        </View>
        {/* Ends - Preview */}
        
        <View style={styles.btnContainer}>
            <CustomButton 
                border={{ addBorder: false, color: "#D6D6D6" }}
                txtStyle={[{ color: "white", textAlign: "center" }]} 
                title={"Book Now"} 
                btnStyle={[{ backgroundColor: "#4C4DDC" }]}
                type={"book-now"}
            />
        </View>
      </ScrollView>
    </View>
  );
};

export default memo(Detailed);
