import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { _WIDTH } from "../../../common/theme";

export default ({ value, title, setValue }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.columnTitle}>{title}</Text>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input}
          value={value}
          autoCorrect={false}
          maxLength={2}
          keyboardType="number-pad"
          placeholder="10"
          placeholderTextColor="#bdc3c7"
          onChangeText={text=>setValue(value => ({
            ...value, year: Number(text)
          }))}
        />
        <Text>년</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: _WIDTH/10,
  },
  columnTitle: {
    fontSize: _WIDTH/32,
    fontWeight: "400",
    marginBottom: _WIDTH/35
  },
  inputContainer: {
    width: "40%",
    height: _WIDTH*0.12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
  },
  input: {
    width: "50%",
    textAlign: "center",
    fontSize: _WIDTH/20,
    fontWeight: "400"
  }
});