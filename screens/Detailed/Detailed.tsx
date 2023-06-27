import React, { memo, useRef, useState } from "react";
import {
  View,
  Text,
  ImageSourcePropType,
  StatusBar,
  Image,
  ScrollView,
} from "react-native";
import { styles } from "./styles";
import { Carousel, Header, Utilities } from "../../components";
import { colors, fonts } from "../../components/styled";
import { imagesData } from "../../DATA";


const Detailed: React.FC = (props) => {

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={colors.white} />
      <Header title={"Detail"} />
      <ScrollView>
        <Carousel data={imagesData} />
        <Utilities />
        
      </ScrollView>
    </View>
  );
};

export default memo(Detailed);