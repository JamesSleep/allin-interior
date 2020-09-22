import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Octiocn from "react-native-vector-icons/Octicons";
import { _WIDTH } from "../common/theme";

export default () => {
  return (
    <View style={styles.container}>
      <Octiocn 
        name="tools"
        size={_WIDTH/10}
      />
      <Text style={{ fontSize: 20, fontWeight: "500", marginTop: 30, }}>
        준비중입니다
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})