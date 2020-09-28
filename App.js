import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from "./src/redux/reducers";
import BaseStackRouter from './src/Router/BaseStackRouter';

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={createStore(reducers)}>
        <NavigationContainer>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView style={{ flex: 1 }}>
            <BaseStackRouter/>
          </SafeAreaView>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
