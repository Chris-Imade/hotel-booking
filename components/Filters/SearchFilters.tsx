import React, { 
    useEffect, 
    useState, 
    memo 
} from "react";
import { 
    View, 
    Text, 
    TouchableOpacity, 
    ScrollView 
} from "react-native";
import { styles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { colors } from "@components/styled";
import { countries } from "../../DATA";
import { setCountryFilter } from "../../Redux/Splice/AppSlice";
import Categories from "../Categories/Categories";

const SearchFilters = () => {
    const [dark, setDark] = useState(true);
    const darkMode = useSelector((state: RootState) => state.data.darkMode);

    useEffect(() => setDark(darkMode), [dark, darkMode]);

    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Text style={[styles.headerTxt, { color: dark ? colors.white : colors.black}]}>Filter Hotel</Text>
            <View style={styles.seperator} />
            <View style={styles.flexBtwn}>
                <Text style={[styles.title, { color: dark ? colors.white : colors.black }]}>Country</Text>
                <TouchableOpacity 
                    onPress={() => {}}
                >
                    <Text style={styles.detail}>See All</Text>
                </TouchableOpacity>
            </View>
            <View style={{ maxHeight: 50 }}>
                <Categories type={"filterCountry"} />
            </View>
            <View style={styles.flexBtwn}>
                <Text style={[styles.title, { color: dark ? colors.white : colors.black }]}>Sort Results</Text>
                <View />
            </View>
            <View style={{ maxHeight: 50 }}>
                <Categories type={"sortedResults"} />
            </View>
            <View style={styles.flexBtwn}>
                <Text style={[styles.title, { color: dark ? colors.white : colors.black }]}>Price Range Per Night</Text>
                <View />
            </View>
            <View>
                {/* Price Range two way slider */}
            </View>

        </View>
    )
}

export default memo(SearchFilters);