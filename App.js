import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Home from "./screens/Home/Home";
import { memo, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { persistor, store } from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import AppRoot from './navigation/AppRoot';
import { NativeBaseProvider } from 'native-base';
import { Schedule } from './screens/index';

SplashScreen.preventAutoHideAsync();

const App = () => {

  const [fontLoaded] = useFonts({
    'Bold-Jakarta': require('./assets/fonts/PlusJakartaSans-Bold.ttf'),
    'Bold-Italic-Jakarta': require('./assets/fonts/PlusJakartaSans-BoldItalic.ttf'),
    'Extra-Bold-Jakarta': require('./assets/fonts/PlusJakartaSans-ExtraBold.ttf'),
    'Extra-Bold-Italic-Jakarta': require('./assets/fonts/PlusJakartaSans-ExtraBoldItalic.ttf'),
    'Extra-Light-Jakarta': require('./assets/fonts/PlusJakartaSans-ExtraLight.ttf'),
    'Extra-Light-Italic-Jakarta': require('./assets/fonts/PlusJakartaSans-ExtraLightItalic.ttf'),
    'Italic-Jakarta': require('./assets/fonts/PlusJakartaSans-Italic.ttf'),
    'Light-Jakarta': require('./assets/fonts/PlusJakartaSans-Light.ttf'),
    'Light-Italic-Jakarta': require('./assets/fonts/PlusJakartaSans-LightItalic.ttf'),
    'Medium-Jakarta': require('./assets/fonts/PlusJakartaSans-Medium.ttf'),
    'Medium-Italic-Jakarta': require('./assets/fonts/PlusJakartaSans-MediumItalic.ttf'),
    'Regular-Jakarta': require('./assets/fonts/PlusJakartaSans-Regular.ttf'),
    'Semi-Bold-Jakarta': require('./assets/fonts/PlusJakartaSans-SemiBold.ttf'),
    'Semi-Bold-Italic-Jakarta': require('./assets/fonts/PlusJakartaSans-SemiBoldItalic.ttf'),
  })


  const onLayoutRootView = useCallback(async () => {
    if(fontLoaded) {
      await SplashScreen.hideAsync();
    }

  }, [fontLoaded]);

  if(!fontLoaded) {
    return null;
  }
  
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <View style={styles.container} onLayout={onLayoutRootView}>
              <AppRoot />
            </View>
          </PersistGate>
        </Provider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default memo(App);