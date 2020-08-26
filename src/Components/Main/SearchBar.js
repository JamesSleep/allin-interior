import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { _WIDTH } from "../../../theme";
import EvilIcons from "react-native-vector-icons/EvilIcons";

export default function SearchBar() {
  return(
    <View style={styles.container}>
      <EvilIcons 
        name="search"
        size={_WIDTH/20}
        style={{
          marginRight: 5
        }}
      />
      <TextInput 
        style={{ fontSize: _WIDTH/30 }}
        placeholder="All In 통합검색"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: _WIDTH/10,
    flexDirection: "row",
    paddingHorizontal: 5,
    borderWidth: 0.3,
    borderRadius: 5,
    alignItems: "center",
  }
});