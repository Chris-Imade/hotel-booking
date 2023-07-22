import React, { memo } from "react";
import { View, Text, Image } from "react-native";
import { CustomButton } from "@components/index";
import { icons } from "../../../assets/images";
import { styles } from "./styles";

const PasswordChanged: React.FC = () => {
    return (
        <View style={styles.container}>
            <Image 
                source={icons.successMark}
                style={{ width: 100, height: 100 }}
                resizeMode="contain"
            />
            <Text style={styles.title}>Password Changed!</Text>
            <Text style={styles.body}>Your password has been changed successfully.</Text>
            <CustomButton 
                border={{ addBorder: false, color: "#D6D6D6" }}
                txtStyle={[{ color: "white", textAlign: "center" }]} 
                title={"Back to Login"} 
                btnStyle={[{ backgroundColor: "#4C4DDC" }]}
                type={"login"}
            />
        </View>
    )
}

export default memo(PasswordChanged);