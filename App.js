import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeRouter from './src/Router/HomeRouter';
import { StatusBar, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from "./src/redux/reducers";

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={createStore(reducers)}>
        <NavigationContainer>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView style={{ flex: 1 }}>
            <HomeRouter/>
          </SafeAreaView>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
