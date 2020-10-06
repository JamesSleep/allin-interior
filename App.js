import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar, SafeAreaView } from 'react-native';
import BaseStackRouter from './src/Router/BaseStackRouter';

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./src/redux/reducers";

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
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
