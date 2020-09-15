import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"
import { _WIDTH } from "../../../common/theme";

export default ({ navigation, name }) => {
  return (
    <View style={styles.container}>
      <Icon 
        name="angle-left"
        size={_WIDTH/15}
        style={{
          position: "absolute",
          left: 15,
        }}
        onPress={()=>navigation.goBack()}
      />
      <Text style={styles.title}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 18,
  }
})