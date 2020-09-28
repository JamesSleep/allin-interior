import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { _WIDTH } from "../../../common/theme";

export default ({ value, setValue }) => {
  return (
    <View style={styles.contaier}>
      <Text style={styles.columnTitle}>업체소개</Text>
      <TextInput 
        style={styles.input}
        multiline
        scrollEnabled={false}
        textAlignVertical="top"
        onChangeText={text=>setValue({...value, discription: text})}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  contaier: {
    flex: 1,
    marginBottom: _WIDTH/10,
  },
  columnTitle: {
    fontSize: _WIDTH/32,
    fontWeight: "400",
    marginBottom: _WIDTH/35
  },
  input: {
    width: "100%",
    height: _WIDTH*0.3,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
  }
});