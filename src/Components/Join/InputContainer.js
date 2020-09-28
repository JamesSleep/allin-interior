import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { _WIDTH } from "../../common/theme";

export default ({ 
  title="",
  editable=true,
  placeholder="",
  keyboardType="default",
  secure=false,
  property="",
  value,
  setValue
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.columnTitle}>{title}</Text>
      <TextInput 
        style={styles.input}
        autoCorrect={false}
        editable={editable}
        placeholder={placeholder}
        placeholderTextColor="gray"
        keyboardType={keyboardType}
        secureTextEntry={secure}
        value={value}
        onChangeText={text=>setValue(property, text)}
      />
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
  input: {
    height: _WIDTH/11,
    paddingBottom: _WIDTH/50,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    fontSize: _WIDTH/22,
  }
});