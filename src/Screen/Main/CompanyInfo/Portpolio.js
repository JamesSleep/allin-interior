import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>업체 포트폴리오</Text>
      <View>
        <TouchableOpacity>
          
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 15,
    fontWeight: "500"
  },
})
