import React, { memo, useRef } from "react";
import {
    View,
    ImageBackground,
    Animated,
    ImageSourcePropType
} from "react-native";
import { styles } from "./styles";
import {
    colors,
    SCREEN_WIDTH
} from "../styled";
import {
    Like
} from "../";
import { images } from "../../assets/images";
import { CarouselImageReceivedProps } from "../../types";


const Carousel: React.FC<CarouselImageReceivedProps> = ({ data }) => {
    const scrollX = useRef(new Animated.Value(0)).current;


    const Indication = () => {
        return (
            <View
                style={{
                    flexDirection: "row",
                    position: "absolute",
                    bottom: 12,
                }}
            >
                {data.map((_, i) => {
                    const inputRange = [(i - 1) * SCREEN_WIDTH, i * SCREEN_WIDTH, (i + 1) * SCREEN_WIDTH];
    
                    const bg = scrollX.interpolate({
                        inputRange,
                        outputRange: [colors.white, colors.primary, colors.white],
                        extrapolate: "clamp"
                    });
    
                    const width = scrollX.interpolate({
                        inputRange,
                        outputRange: [7, 20, 7],
                        extrapolate: "clamp"
                    })
    
    
                    return (
                        <Animated.View  
                        key={`indicator-{${i}}`}
                            style={{
                                width,
                                height: 7,
                                backgroundColor: bg,
                                marginHorizontal: i !== 0 || i !== data.length - 1 ? 5 : 0,
                                borderRadius: 5
                            }}
                        />
                    )
                })}
            </View>
        )
    }

    return (
        <View style={{
            position: "relative",
            alignItems: "center"
          }}>
            <Animated.FlatList
              data={data}
              // @ts-ignore
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              horizontal
              scrollEventThrottle={35}
              pagingEnabled={true}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX }}}],
                { useNativeDriver: false }
              )}
              style={{ width: "100%" }}
              renderItem={({ item }) => (
                <View style={styles.scrollContainer}>
                  <ImageBackground
                    style={{
                      width: SCREEN_WIDTH - 40,
                      height: 246,
                      position: "relative",
                    }}
                    imageStyle={{
                      borderRadius: 8,
                    }}
                    source={item.image}
                    resizeMode="cover"
                  >
                    <Like />
                  </ImageBackground>
                </View>
              )}
            />
            <Indication />
          </View>
    )
}

export default memo(Carousel);