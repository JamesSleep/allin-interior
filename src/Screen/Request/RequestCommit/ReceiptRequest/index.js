import React from "react";
import { View, StyleSheet } from "react-native";
import { backgroundColor } from "../../../../common/theme";
import Header from "./Header";

export default ({ navigation, route }) => {
  //const { option } = route.params;
  const option = "Residential";
  return (
    <View style={styles.container}>
      <Header />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor
  }
})