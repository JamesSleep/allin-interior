import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { buttonColor } from "../../../common/theme";
import { TouchableOpacity } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center"
  },
  headerText: {
    fontSize: 20, 
    fontWeight: "600"
  },
  logoutContainer: {
    position: "absolute",
    right: 10
  },
  logoutText: {
    fontSize: 14, 
    color: buttonColor
  }
})

export default ({ logout }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>업체 프로필</Text>
      <View style={styles.logoutContainer}>
        <TouchableOpacity onPress={()=>logout()}>
          <Text style={styles.logoutText}>로그아웃</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}