import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { backgroundColor, buttonColor } from "../../../../common/theme";
import Header from "./Header";
import Content from "./Content";
import { TouchableOpacity } from "react-native-gesture-handler";

export default ({ navigation, route }) => {
  //const { option } = route.params;
  const option = "Residential";
  return (
    <View style={styles.container}>
      <Header />
      <Content option={option} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>navigation.navigate("Estimate")}
        >
          <Text style={{ fontSize: 15, color: "white" }}>확인</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor
  },
  buttonContainer: {
    flex: 1,
    paddingHorizontal: 30,
  },
  button: {
    width: "100%",
    height: "70%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: buttonColor,
    borderRadius: 5,
  }
})