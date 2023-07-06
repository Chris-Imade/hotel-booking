import { Text, View, Pressable } from 'react-native';
import React from 'react';
import { styles } from "./styles";
import { useNavigation } from '@react-navigation/native';

const CustomButton = (props) => {
  const navigation = useNavigation();

  const handleLogin = () => {
    console.log("Login btn clicked");
  }
  const handleRegister = () => {
    console.log("Register btn clicked");
  }

  return (
    <View>
      {props.type === "book-now" ? (
        <Pressable 
        onPress={() => navigation.navigate("book-now")}
        style={[
          styles.button, 
          props.border.addBorder ? { 
            borderWidth:  1, 
            borderColor: props.border.color,

        } : null, ...props.btnStyle]}>
          <Text style={[styles.btnTxt, ...props.txtStyle]}>{props.title}</Text>
      </Pressable>
      ) : props.type == "payment" ? (
        <Pressable
        onPress={() => alert("Pay Time!!!")}
        style={[
          styles.button, 
          props.border.addBorder ? { 
            borderWidth:  1,
            borderColor: props.border.color,

        } : null, ...props.btnStyle]}>
          <Text style={[styles.btnTxt, ...props.txtStyle]}>{props.title}</Text>
        </Pressable>
      ) : props.type === "login" ? (
        <Pressable
          onPress={handleLogin}
          style={[
            styles.button, 
            props.border.addBorder ? { 
              borderWidth:  1,
              borderColor: props.border.color,

          } : null, ...props.btnStyle]}>
          <Text style={[styles.btnTxt, ...props.txtStyle]}>{props.title}</Text>
        </Pressable>
      ) : props.type === "register" ? (
        <Pressable
          onPress={handleRegister}
          style={[
            styles.button, 
            props.border.addBorder ? { 
              borderWidth:  1,
              borderColor: props.border.color,
          } : null, ...props.btnStyle]}>
          <Text style={[styles.btnTxt, ...props.txtStyle]}>{props.title}</Text>
        </Pressable>
      ) : null}
    </View>
  )
}

export default CustomButton;