import React, { useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar, SafeAreaView, Platform } from 'react-native';
import BaseStackRouter from './src/Router/BaseStackRouter';
import SplashScreen from "react-native-splash-screen";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./src/redux/reducers";
import { checkMultiple, request, requestMultiple, PERMISSIONS, RESULTS, openLimitedPhotoLibraryPicker } from "react-native-permissions";
 
const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
      askPermission();
    }, 1000);
  }, []);

  const askPermission = async () => {
    let CAMERA = null, PHOTO = null;
    if (Platform.OS === "ios") {
      CAMERA = PERMISSIONS.IOS.CAMERA;
      PHOTO = PERMISSIONS.IOS.PHOTO_LIBRARY;
    }
    else {
      CAMERA = PERMISSIONS.ANDROID.CAMERA;
      PHOTO = PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE;
    }
    checkMultiple([CAMERA, PHOTO]).then((staus) => {
      /* console.log(`${Platform.OS} camera :`,staus[CAMERA]);
        console.log(`${Platform.OS} photo :`,staus[PHOTO]); */
        requestMultiple([CAMERA, PHOTO]).then((result) => {
          /* console.log(`${Platform.OS} camera :`, result);
          console.log(`${Platform.OS} photo :`, result); */
        })
    })
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        { Platform.OS === "android" && (
          <StatusBar 
            barStyle={"dark-content"}
            backgroundColor={"white"}
          />
        )}
        { Platform.OS === "ios" && (
          <StatusBar 
            barStyle={"dark-content"}
            backgroundColor={"white"}
          />
        )}
        <SafeAreaView style={{ flex: 1 }}>
          <Provider store={createStore(reducers)}>
            <BaseStackRouter/>
          </Provider>
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
