import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeRouter from './src/Router/HomeRouter';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <HomeRouter/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
