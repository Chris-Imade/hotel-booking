import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { styles } from "./styles";
import { CustomButton, CustomTextInput, Header } from "@components/index";
import { colors } from "@components/styled";
import { icons } from "../../../assets/images";
import { useNavigation } from "@react-navigation/native";
import { ScreenProps } from "../../../navigation/Stacks/types";

const Register: React.FC<ScreenProps<"Login">> = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#000000"} barStyle={"light-content"} />
      <View style={{ marginTop: 12 }}>
        <Header type={"auth"} />
      </View>
      <ScrollView style={{ marginHorizontal: 20, flex: 1 }}>
        <View>
          <Text style={styles.loginGreeting}>
          Hello! Register to get started
          </Text>
        </View>
        <CustomTextInput screen={"register"} type={"username"} />
        <CustomTextInput screen={"register"} type={"email"} />
        <CustomTextInput screen={"register"} type={"password"} />
        <CustomButton
          border={{ addBorder: false, color: "#D6D6D6" }}
          txtStyle={[{ color: "white", textAlign: "center" }]}
          title={"Register"}
          btnStyle={[{ backgroundColor: "#4C4DDC" }]}
          type={"register"}
        />
        <View style={styles.marginContainer}>
          <View style={styles.margin} />
          <Text style={styles.marginTxt}>Or Login with</Text>
          <View style={styles.margin} />
        </View>
        <View style={styles.socialWrapper}>
          <TouchableOpacity style={styles.socialLoginContainer}>
            <Image
                source={icons.facebookIcon}
                style={{ width: 26, height: 26 }}
                resizeMode={"contain"}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialLoginContainer}>
            <Image 
                source={icons.googleIcon}
                style={{ width: 26, height: 26 }}
                resizeMode={"contain"}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialLoginContainer}>
            <Image 
                source={icons.iosIcon}
                style={{ width: 26, height: 26 }}
                resizeMode={"contain"}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomRoute}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.bottomRouteMainTxt}>Already have an account?</Text>
                <TouchableOpacity
                  // @ts-ignore
                  onPress={() => navigation.navigate("Login")}
                >
                  <Text style={styles.bottomRouteMinorTxt}>Login Now</Text>
                </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;