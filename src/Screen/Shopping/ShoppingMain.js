import React from "react";
import { View, StyleSheet } from "react-native";
import ErrorPage from "../../Components/ErrorPage";
import { backgroundColor } from "../../common/theme";


export default () => {
  return (
    <View style={styles.container}>
      <ErrorPage />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor
  }
})