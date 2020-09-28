import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import { _WIDTH, buttonColor } from "../../common/theme";

export default ({ autoLogin, saveID, setState }) => (
  <View style={styles.autoLoginContainer}>
    <TouchableOpacity
      style={{ flexDirection: "row", alignItems: "center", marginRight: 10 }}
      onPress={()=>setState("autoLogin", !autoLogin)}
    >
      <Ionicons 
        name={autoLogin? "checkmark-circle" : "checkmark-circle-outline"} 
        size={_WIDTH/20} 
        color={autoLogin? buttonColor : "gray"}
      />
      <Text style={{ fontSize: _WIDTH/32, marginRight: 15, }}>자동로그인</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={{ flexDirection: "row", alignItems: "center", marginRight: 10 }}
      onPress={()=>setState("saveID", !saveID)}
    >
      <Ionicons 
        name={saveID? "checkmark-circle" : "checkmark-circle-outline"} 
        size={_WIDTH/20} 
        color={saveID? buttonColor : "gray"} 
      />
      <Text style={{ fontSize: _WIDTH/32, marginRight: 10 }}> 아이디저장 </Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  autoLoginContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 15,
  },
});