import React, { memo, useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { styles } from "./styles";
import { ScreenProps } from "Stacks/types";
import { Card, SearchBar, SmallCard } from "../../components/index";
import { Categories } from "../../components/index";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { icons } from "../../assets/images";
import { data } from "../../DATA";
import { deleteRecent, setSearchParams } from "../../Redux/Splice/AppSlice";
import { useNavigation } from "@react-navigation/native";
import { colors } from "@components/styled";

const Search: React.FC<ScreenProps<"search">> = () => {
  const [dark, setDarkTheme] = useState<boolean>();
  const darkMode = useSelector((state: RootState) => state.data.darkMode);
  const navigation = useNavigation();

 
  useEffect(() => setDarkTheme(darkMode), [darkMode]);


  const category = useSelector((state: RootState) => state.data.category);
  const searchQuery = useSelector(
    (state: RootState) => state.data.searchParams
  );
  const recent = useSelector((state: RootState) => state.data.recent);
  const searching = useSelector((state: RootState) => state.data.searching);
  const [layout, setLayout] = useState<string>("grid");
  const dispatch = useDispatch();
  console.log("searching: " + searching);

  return (
    <>
      <StatusBar backgroundColor={dark ? colors.black : colors.white} barStyle={dark ? "light-content" : "dark-content"} />
      <SafeAreaView style={[styles.container, { backgroundColor: dark ? colors.black : colors.white }]}>
        <View style={styles.searchBarContainer}>
          <SearchBar type={"Search"} />
        </View>
        <View style={{ marginLeft: 20, marginBottom: 10 }}>
          <Categories type={"search"} />
        </View>
        {searching === "typing..." && recent.length > 0 ? (
          <View style={styles.containerRecent}>
              <View style={styles.borderRecent} />
              <Text style={styles.resultText}>Recent</Text>
              <View style={{ marginTop: 15 }}>
                  {recent.map((item, _) => (
                      <Pressable style={[ styles.recent, { marginVertical: _ != 0 ? 5 : 0 } ]} key={_}>
                          <TouchableOpacity 
                            onPress={() => dispatch(setSearchParams(item.prevSearch))}
                          >
                            <Text style={styles.recentTxt}>{item.prevSearch}</Text>
                          </TouchableOpacity>
                          <TouchableOpacity 
                              onPress={() => dispatch(deleteRecent(item.id))}
                              style={styles.deleteContainer}>
                              <Text style={styles.delete}>x</Text>
                          </TouchableOpacity>
                      </Pressable>
                  ))}
              </View>
          </View>
        ) : searching === "not typing" ? (
          <>
            <View style={styles.resultInfo}>
              <Text style={{ color: dark ? colors.white : colors.black }}>{category + " " + "275,907"}</Text>
              <View style={styles.layout}>
                <Pressable onPress={() => setLayout("flex")}>
                  <Image
                    source={icons.filter}
                    resizeMode="contain"
                    style={{ width: 28, height: 28 }}
                  />
                </Pressable>
                <Pressable onPress={() => setLayout("grid")}>
                  <Image
                    source={icons.filter}
                    resizeMode="contain"
                    style={{ width: 28, height: 28, marginLeft: 10 }}
                  />
                </Pressable>
              </View>
            </View>
            {/* Result */}
            <View>
              {layout === "grid" ? (
                <View
                  style={{
                    marginLeft: 20,
                    marginVertical: 20,
                    flexDirection: "row",
                  }}
                >
                  <ScrollView showsVerticalScrollIndicator={false}>
                    {data.map((item, _) => (
                      <View
                        key={item.id}
                        style={{ marginBottom: _ === data.length - 1 ? 150 : 0 }}
                      >
                        <Card type={"Search"} hotel={item} />
                      </View>
                    ))}
                  </ScrollView>
                </View>
              ) : layout === "flex" ? (
                <View>
                  <ScrollView showsVerticalScrollIndicator={false}>
                    {data.map((item, _) => (
                      <View
                        key={item.id}
                        style={{
                          marginHorizontal: 20,
                          marginVertical: 10,
                          marginBottom: _ === data.length - 1 ? 185 : 0,
                        }}
                      >
                        <SmallCard item={item} />
                      </View>
                    ))}
                  </ScrollView>
                </View>
              ) : null}
            </View>
          </>
        ) : (
          <>
            <View style={styles.resultInfo}>
              <Text style={styles.resultText}>
                {category + " " + "(234,567)"}
              </Text>
              <View style={styles.layout}>
                <Pressable onPress={() => setLayout("flex")}>
                  <Image
                    source={icons.filter}
                    resizeMode="contain"
                    style={{ width: 28, height: 28 }}
                  />
                </Pressable>
                <Pressable onPress={() => setLayout("grid")}>
                  <Image
                    source={icons.filter}
                    resizeMode="contain"
                    style={{ width: 28, height: 28, marginLeft: 10 }}
                  />
                </Pressable>
              </View>
            </View>
            {/* Result */}
            <View>
              {layout === "grid" ? (
                <View
                  style={{
                    marginLeft: 20,
                    marginVertical: 20,
                    flexDirection: "row",
                  }}
                >
                  <ScrollView showsVerticalScrollIndicator={false}>
                    {data.map((item, _) => (
                      <View
                        key={item.id}
                        style={{ marginBottom: _ === data.length - 1 ? 150 : 0 }}
                      >
                        <Card type={"Search"} hotel={item} />
                      </View>
                    ))}
                  </ScrollView>
                </View>
              ) : layout === "flex" ? (
                <View>
                  <ScrollView showsVerticalScrollIndicator={false}>
                    {data.map((item, _) => (
                      <View
                        key={item.id}
                        style={{
                          marginHorizontal: 20,
                          marginVertical: 10,
                          marginBottom: _ === data.length - 1 ? 185 : 0,
                        }}
                      >
                        <SmallCard item={item} />
                      </View>
                    ))}
                  </ScrollView>
                </View>
              ) : null}
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
};

export default memo(Search);
