import React, { Component } from 'react';
import { View, Image, Text, ImageSourcePropType } from 'react-native';
import { icons, images } from "../../assets/images/index";
import { SCREEN_WIDTH } from "../styled";
import { styles } from './styles';
import { Rating } from 'react-native-ratings';

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

class SmallCard extends Component<SmallCardProp, SmallCardState> {
    constructor(props: SmallCardProp) {
        super(props);
        this.state = {
            rating: 0,
        }

        this.ratingCompleted = this.ratingCompleted.bind(this);
    }
    

    ratingCompleted(rating: any) {
        console.log(this.state);
        this.setState({
            rating: rating
        })
    }

    render() {
        return (
            <View style={styles.cardContainer}>
                <Image 
                    source={this.props.item.image}
                    resizeMode='cover'
                    style={{
                        width: (SCREEN_WIDTH - 40) / 3,
                        height: (SCREEN_WIDTH - 100) / 3,
                        borderRadius: 6
                    }}
                />
                <View style={styles.cardContent}>
                    <View style={styles.firstContent}>
                        <Text style={styles.hotelName}>{this.props?.item.name}</Text>
                        <View style={styles.cost}>
                            <Text style={styles.costOne}>{"N" + this.props?.item.price + "K"}</Text>
                            {/* <Text style={styles.night}>/night</Text> */}
                        </View>
                    </View>                        
                    <Text style={styles.address}>{this.props?.item.address}</Text>
                    <View style={styles.starContainer}>
                        <Image 
                            source={icons.star}
                            style={{
                            width: 20,
                            height: 20
                            }}
                        />
                        <Text style={[styles.hotelName, { marginLeft: 5 }]}>{this.props?.item.rating}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default SmallCard;

{/* Only use this rating inn the details page */}
{/* <Rating
    onFinishRating={this.ratingCompleted.bind(this)}
    imageSize={20}
    jumpValue={0.5}
/> */}