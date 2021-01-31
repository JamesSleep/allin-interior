import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { _HEIGHT, _WIDTH, buttonColor } from "../../common/theme";

export default ({ navigation, submitLogin }) => (
  <View style={styles.buttonContainer}>
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <TouchableOpacity
        style={styles.joinButton}
        //onPress={() => navigation.navigate("Agreement", { option: "general" })}
        onPress={() => navigation.navigate("SelectJoinType")}
      >
        <Text style={styles.joinText}>회원가입</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => submitLogin()}
      >
        <Text style={styles.loginText}>로그인</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    height: _HEIGHT / 18,
    justifyContent: "space-between",
    marginVertical: 10,
  },
  joinButton: {
    width: _WIDTH * 0.43,
    height: "100%",
    borderWidth: 0.5,
    borderColor: buttonColor,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  joinText: {
    fontSize: _WIDTH / 26,
    color: buttonColor,
  },
  loginButton: {
    width: _WIDTH * 0.43,
    height: "100%",
    backgroundColor: buttonColor,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    fontSize: _WIDTH / 26,
    color: "white",
  },
});