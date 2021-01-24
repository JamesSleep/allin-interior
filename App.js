import React, { useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar, SafeAreaView, Platform } from 'react-native';
import BaseStackRouter from './src/Router/BaseStackRouter';
import SplashScreen from "react-native-splash-screen";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./src/redux/reducers";

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);
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
