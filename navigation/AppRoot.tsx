import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { RootState } from '../Redux/store';
import { 
  MainApp, 
  Authentication 
} from "./index";
import { Search } from '../screens/index';


const AppRoot:React.FC = () => {
  const user = useSelector((state: RootState) => state.data.user);
  const [userData, setUserData] = useState<string>("");
  

  useEffect(() => {
    setUserData(userData);
  }, [user]);

  if(!user !== undefined) {
    return (
      <MainApp />
      // @ts-ignore
      // <Search type={"Search"} />
    )
  } else {
    return (
      <Authentication />
    )
  }
}

export default AppRoot;