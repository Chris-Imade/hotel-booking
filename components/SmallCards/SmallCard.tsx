import React, { Component, useEffect, useState } from 'react';
import { View, Image, Text, ImageSourcePropType, Pressable } from 'react-native';
import { icons, images } from "../../assets/images/index";
import { 
    SCREEN_WIDTH, 
    colors 
} from "../styled";
import { styles } from './styles';
import { Rating } from 'react-native-ratings';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';

type SmallCardProp = {
    item: {
        image: ImageSourcePropType;
        price: number;
        address: string;
        name: string;
        rating: string;
    }
}

type SmallCardState = {
    rating: number;
  }

const SmallCard = (props: SmallCardProp) => {
    const [rating, setRating] = useState<SmallCardState>({rating: 0});
    const [dark, setDarkTheme] = useState<boolean>();
    const darkMode = useSelector((state: RootState) => state.data.darkMode);

    const dispatch = useDispatch();

    useEffect(() => setDarkTheme(darkMode), [darkMode]);

    const navigation = useNavigation();
    

    // const ratingCompleted = (rating: any) => {
    //     setRating(rating);
    // }

    const handlePress = () => {
        // @ts-ignore
        navigation.navigate("detailed-screen", props.item);
    }

    return (
        <Pressable 
            onPress={handlePress}
            style={[styles.cardContainer, { backgroundColor: dark ? colors.partialBlack : colors.white }]}>
            <Image 
                source={props.item.image}
                resizeMode='cover'
                style={{
                    width: (SCREEN_WIDTH - 40) / 3,
                    height: (SCREEN_WIDTH - 100) / 3,
                    borderRadius: 6
                }}
            />
            <View style={styles.cardContent}>
                <View style={styles.firstContent}>
                    <Text style={[styles.hotelName, { color: dark ? colors.white : colors.black }]}>{props?.item.name}</Text>
                    <View style={styles.cost}>
                        <Text style={styles.costOne}>{"₦" + props?.item.price + "K"}</Text>
                    </View>
                </View>                        
                <View style={{ 
                    marginBottom: 8,
                    flexDirection: "row",
                    alignItems: "center"
                }}> 
                    <Image 
                        source={icons.location}
                        style={{
                            width: 18,
                            height: 18
                        }}
                    />
                <Text style={[styles.address, { color: dark ? colors.darkModeGrayText : colors.textGray }]}>{props?.item.address}</Text>
                </View>
                <View style={styles.starContainer}>
                    <Image 
                        source={icons.star}
                        style={{
                        width: 20,
                        height: 20
                        }}
                    />
                    <Text style={[
                        styles.hotelName, 
                        { marginLeft: 8 },
                        { color: dark ? colors.white : colors.black }
                    ]}>{props?.item.rating}</Text>
                </View>
            </View>
        </Pressable>
    );
}

export default SmallCard;

{/* Only use this rating inn the details page */}
{/* <Rating
    onFinishRating={this.ratingCompleted.bind(this)}
    imageSize={20}
    jumpValue={0.5}
/> */}