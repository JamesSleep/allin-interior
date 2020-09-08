import React from "react";
import { View, Text, StyleSheet, TextInput, Platform } from "react-native";
import { _WIDTH, _HEIGHT } from "../../common/theme";

export default function TextContainer({
  title, 
  subTitle, 
  placeholder, 
  password, 
  value, 
  setValue, 
  record 
}) {
  return(
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          {title}
        </Text>
        <Text style={styles.subTitleText}>
          {subTitle !== undefined && `(${subTitle})`}
        </Text>
      </View>
      <TextInput 
        style={{
          fontSize: _WIDTH/33,
          marginTop: 2,
          width: "98%",
          height: _WIDTH/10,
          borderBottomWidth: 0.5,
        }}
        value={record}
        placeholder={placeholder}
        placeholderTextColor="gray"
        secureTextEntry={password}
        onChangeText={text => setValue(value, text)}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 15,
    alignItems: "center",
  },
  titleContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  titleText: {
    fontSize: _WIDTH/30,
    marginRight: 5,
    fontWeight: "500"
  },
  subTitleText: {
    fontSize: _WIDTH/30,
    color: "gray",
  }
});