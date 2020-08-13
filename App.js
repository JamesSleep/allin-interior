import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeRouter from './src/Router/HomeRouter';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <HomeRouter/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
