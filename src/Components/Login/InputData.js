import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import SimpleIcon from "react-native-vector-icons/SimpleLineIcons";
import { _HEIGHT, _WIDTH } from "../../common/theme";

export default ({ email, password, setState }) => (
  <View style={styles.container}>
    <View style={styles.inputTextView}>
      <SimpleIcon style={{ marginRight: 15 }} name="user" size={_WIDTH/22} color="gray" />
      <TextInput 
        placeholder="이메일" 
        placeholderTextColor="gray" 
        value={email}
        style={{ width: "100%", fontSize: _WIDTH/30 }}
        onChangeText={text=>setState("email", text)}
      />
    </View>
    <View style={styles.inputTextView}>
      <SimpleIcon style={{ marginRight: 15 }} name="lock" size={_WIDTH/22} color="gray" />
      <TextInput 
        placeholder="비밀번호" 
        placeholderTextColor="gray" 
        secureTextEntry
        style={{ width: "100%", fontSize: _WIDTH/30 }}
        onChangeText={text=>setState("password", text)}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  inputTextView: {
    width: "100%",
    height: _HEIGHT/17,
    marginVertical: 7,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: 5,
  },
});