import React, { useState, memo } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { styles } from "./styles";
import { useDispatch } from "react-redux";
import { setCategory } from "../../Redux/Splice/AppSlice";

const catList = ["All Hotels", "Recommended", "Popular", "Near Me"];

const Categories:React.FC = () => {
    const [selectedCat, setSelectedCat] = useState("");
    const [index, setIndex] = useState(0);
    const dispatch = useDispatch();

    return(
        <ScrollView 
            showsHorizontalScrollIndicator={false}
            horizontal>
            {catList.map((item, _) => (
                <Pressable 
                    onPress={() => {
                        setSelectedCat(item);
                        setIndex(_);
                        dispatch(setCategory(item));
                    }}
                    style={{ justifyContent: "center", alignItems: "center" }} key={_}>
                    <Text style={[ index == _ ? styles.activeBackground : styles.inActiveBackground, { marginHorizontal: _ !== 0 ? 10 : 0 } ]}>{item}</Text>
                    {/* @ts-ignore */}
                </Pressable>
            ))}
        </ScrollView>
    )
}

export default memo(Categories);