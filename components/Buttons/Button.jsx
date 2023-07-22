import { Text, View, Pressable } from 'react-native';
import React, { useState } from 'react';
import { styles } from "./styles";
import { useNavigation } from '@react-navigation/native';
import Loader from '../Loader/Loader';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { AUTH_CREATE } from '../../utils/config';

const CustomButton = (props) => {
  const [responseData, setResponseData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigation = useNavigation();
  const token = useSelector((state) => state.data.token);
  const email = useSelector((state) => state.data.email);
  const username = useSelector((state) => state.data.username);
  const password = useSelector((state) => state.data.password);



  const handleLogin = () => {
    console.log("Login btn clicked");
  }
  const postData = async () => {
    setLoading(true);

    const data = {
      username,
      email,
      password,
    }

    try {
      const response = await fetch(AUTH_CREATE, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors',
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });

      // @ts-ignore
      setResponseData(response?.data);
    } catch (error) {
      setError(error);
      console.log(error);
    }
    setLoading(false);
  };


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
          onPress={() => postData()}
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