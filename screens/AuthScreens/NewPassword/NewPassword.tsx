import { CustomButton, Header } from "@components/index";
import React, { memo, useState } from "react";
import { View, Text, SafeAreaView, TextInput } from "react-native";
import { styles } from "./styles";
import { colors } from "@components/styled";

const NewPassword: React.FC = () => {
    const [newPassword, setNewPassword] = useState<string>("");
    const [confirmPass, setConfirmPass] = useState<string>("");
    return (
        <View style={styles.container}>
            <Header type={"auth"} />
            <SafeAreaView style={{ marginHorizontal: 20 }}>
                <Text style={styles.topText}>Create new password</Text>
                <Text style={styles.bottomText}>Your new password must be unique from those previously used.</Text>
                <View>
                    <TextInput
                        placeholder="New Password"
                        placeholderTextColor={"#8391A1"}
                        cursorColor={colors.gray}
                        onChangeText={(text) => setNewPassword(text)}
                        style={[styles.textInputs, { marginBottom: 15 }]}
                    />
                    <TextInput
                        placeholder="Confirm Password"
                        placeholderTextColor={"#8391A1"}
                        cursorColor={colors.gray}
                        onChangeText={(text) => setConfirmPass(text)}
                        style={[styles.textInputs, { marginBottom: 38 }]}
                    />
                </View>
                <View style={styles.btnContainer}>
                    <CustomButton
                        border={{ addBorder: false, color: "#D6D6D6" }}
                        txtStyle={[{ color: "white", textAlign: "center" }]} 
                        title={"Reset Password"} 
                        btnStyle={[{ backgroundColor: "#4C4DDC" }]}
                        type={"login"}
                    />
                </View>
            </SafeAreaView>
        </View>
    )
}

export default memo(NewPassword);