import { CustomButton, CustomTextInput, Header } from "@components/index";
import React from "react";
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity } from "react-native";
import { colors } from "@components/styled";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

const ForgotPassword: React.FC = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.black} barStyle={"light-content"} />
            <View style={{ marginTop: 12 }}>
                <Header type={"auth"} />
            </View>
            <SafeAreaView style={{ marginHorizontal: 20 }}>
                <View style={styles.top}>
                    <Text style={styles.topText}>Forgot Password?</Text>
                    <Text style={styles.topBottomText}>Don't worry! It occurs. Please enter the email address linked with your account.</Text>
                    <CustomTextInput screen={"login"} type={"email"} />
                    <View style={{ marginTop: 30 }}>
                        <CustomButton 
                            border={{ addBorder: false, color: "#D6D6D6" }}
                            txtStyle={[{ color: "white", textAlign: "center" }]} 
                            title={"Send Code"} 
                            btnStyle={[{ backgroundColor: "#4C4DDC" }]}
                            type={"login"}
                        />
                    </View>
                </View>

                <View style={styles.bottom}>
                    <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 30 }}>
                        <Text style={styles.bottomRouteMainTxt}>Remember Password?</Text>
                        <TouchableOpacity
                        // @ts-ignore
                        onPress={() => navigation.navigate("Login")}
                        >
                        <Text style={styles.bottomRouteMinorTxt}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default ForgotPassword;