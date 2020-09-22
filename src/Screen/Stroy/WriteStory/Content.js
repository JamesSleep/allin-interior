import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

export default ({ content, setContent }) => (
  <View style={styles.container}>
    <Text style={styles.title}>내용 입력</Text>
    <TextInput 
      multiline
      style={styles.input}
      onChangeText={text=>setContent(text)}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 4,
    marginTop: 30,
    paddingBottom: 30,
  },
  title: {
    fontSize: 16,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: 10,
    fontSize: 13,
  }
});
