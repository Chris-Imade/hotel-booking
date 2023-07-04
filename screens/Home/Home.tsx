import React, { memo } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  FlatList,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { colors } from "../../components/styled";
import { SCREEN_WIDTH } from "../../components/styled";
import WebHome from "./WebHome";
import { SearchBar } from "../../components/index";
import SmallCard from "../../components/SmallCards/SmallCard";
import Card from "@components/Card/Card";
import { images } from "../../assets/images/index";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { ScreenProps } from "Stacks/types";
import { GetLocation } from "../../components/index";
import { popular, data } from "../../DATA";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

const Home: React.FC<ScreenProps<"home-screen">> = () => {
  const darkMode = useSelector((state: RootState) => state.data.darkMode);
  const navigation = useNavigation();


  return (
    <SafeAreaView style={[styles.container, { backgroundColor: darkMode ? colors.black : "#ffffff" }]}>
      <StatusBar barStyle={darkMode ? "light-content" : "dark-content"} backgroundColor={darkMode ? colors.black : colors.white} />
      {Platform.OS === "web" ? (
        <WebHome />
      ) : (
        <ScrollView>
          {/* Component to get current location */}
          <View style={{}}>
            <GetLocation />
          </View>

          <View>
            <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
              {/* @ts-ignore */}
              <SearchBar type={"Home"} />
            </View>

            <View style={styles.header}>
              <Text style={[styles.headerLeft, { color: darkMode ? colors.white : colors.white }]}>Nearby your location</Text>
              <TouchableOpacity
                //  @ts-ignore
                onPress={() => navigation.navigate("hotels-nearby")}
              >
                <Text style={styles.headerRight}>See all</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                marginLeft: 20,
                marginVertical: 20,
                flexDirection: "row",
              }}
            >
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {data.map((item) => (
                  <View key={item.id} style={{ marginRight: 15 }}>
                    <Card type={"Home"} hotel={item} />
                  </View>
                ))}
              </ScrollView>
            </View>

            <View style={styles.header}>
              <Text style={[styles.headerLeft, { color: darkMode ? colors.white : colors.white }]}>Popular Destination</Text>
              <Text style={styles.headerRight}>See all</Text>
            </View>

            <View>
              <ScrollView showsVerticalScrollIndicator={false}>
                {popular.map((item) => (
                  <View
                    key={item.id}
                    style={{
                      marginHorizontal: 20,
                      marginVertical: 10,
                    }}
                  >
                    <SmallCard item={item} />
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default memo(Home);
