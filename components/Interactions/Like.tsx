import React, { memo, useState } from "react";
import { Image, Pressable } from "react-native";
import { icons } from "../../assets/images";
import { colors } from "../styled";

const Like: React.FC = () => {
    const [liked, setLiked] = useState<boolean>(false);

    return (
        <Pressable
            onPress={() => setLiked(!liked)}
            style={{
                width: 32,
                height: 32,
                backgroundColor: colors.white,
                position: "absolute",
                borderRadius: 32 / 2,
                justifyContent: "center",
                alignItems: "center",
                top: 12,
                right: 12,
            }}
        >
            {liked ? (
                <Image
                source={icons.favorite_active}
                style={{
                    width: 20,
                    height: 20,
                }}
                />
            ) : (
                <Image
                source={icons.favorite_inactive}
                style={{
                    width: 20,
                    height: 20,
                }}
                />
            )}
        </Pressable>
    )
}

export default memo(Like);