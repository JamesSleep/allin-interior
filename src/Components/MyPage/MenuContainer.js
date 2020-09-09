import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { _WIDTH } from "../../common/theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: _WIDTH/10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.5,
    marginBottom: 10
  },
  title: {
    fontSize: 14,
    fontWeight: "400"
  },
})

export default ({ title, children, touch }) => {
  return (
    <>
      { touch ?
        <TouchableOpacity style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          {children}
        </TouchableOpacity> :
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          {children}
        </View>
      }
    </>
  )
}