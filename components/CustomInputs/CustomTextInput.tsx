import React, { useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { colors } from "@components/styled";
import { styles } from "./styles";
import { icons } from "../../assets/images";

interface InputProps {
    type: string;
    screen: string;
};

const CustomTextInput: React.FC<InputProps> = ({ type, screen }) => {
    const [usernameInput, setUsernameInput] = useState<string>("");
    const [userEmailInput, setUserEmailInput] = useState<string>("");
    const [userPasswordInput, setUserPasswordInput] = useState<string>("");
    const [visible, setVisible] = useState<boolean>(false);
    console.log(userEmailInput);
    console.log(userPasswordInput);


    return (
        <>
            {type === "email" ? (
                <TextInput
                    placeholder="Enter your email"
                    placeholderTextColor={"#8391A1"}
                    cursorColor={colors.gray}
                    onChangeText={(text) => setUserEmailInput(text)}
                    style={[styles.textInputs, { marginTop: screen === "login" ? 32 : 0 }]}
                />
            ) : type === "password" ? (
                <View style={styles.passwordContainer}>
                    <TextInput 
                        placeholder="Enter your password"
                        placeholderTextColor={"#8391A1"}
                        cursorColor={colors.gray}
                        style={[styles.textInputs, { marginBottom: screen === "register" ? 32 : 15 }]}
                        secureTextEntry={!visible}
                        onChangeText={(text) => setUserPasswordInput(text)}
                    />
                    {visible ? (
                        <TouchableOpacity
                            style={styles.passwordInput}
                            onPress={() => setVisible(!visible)}
                        >
                            <Image 
                                source={icons.eyeOpened}
                                style={[{ width: 18.6, height: 12.38 }]}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity
                            style={styles.passwordInput}
                            onPress={() => setVisible(!visible)}
                        >
                            <Image
                                source={icons.eyeClosed}
                                style={[{ width: 18.6, height: 13.31 }]}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    )}
                </View>
            ) : type === "username" ? (
                <TextInput
                    placeholder="Username"
                    placeholderTextColor={"#8391A1"}
                    cursorColor={colors.gray}
                    onChangeText={(text) => setUserEmailInput(text)}
                    style={[styles.textInputs, { 
                        marginTop: screen === "register" ? 32 : 0,
                    }]}
                />
            ) : null}
        </>
    )
}

export default CustomTextInput;