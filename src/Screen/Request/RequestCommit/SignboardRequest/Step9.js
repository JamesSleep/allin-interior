import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import LogoView from "../../../../Components/Request/LogoView"
import RequestText from "../../../../Components/Request/RequestText"
import InputAddress from "../StructRequest/InputAddress";

export default ({ state, setState }) => {
  return (
    <View style={styles.container}>
      <LogoView />
      <RequestText 
        text1="요청사항"
        text2="을 입력해주세요"
      />
      <View style={styles.content}>
        <Text style={styles.title}>요청사항</Text>
        <TextInput 
          multiline
          textAlignVertical="top"
          style={styles.input}
          onChangeText={text => setState({
            ...state,
            request: text
          })}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 4,
    paddingHorizontal: 25,
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 15,
    marginBottom: 10,
  },
  input: {
    width: "100%",
    height: 200,
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 13,
  }
});