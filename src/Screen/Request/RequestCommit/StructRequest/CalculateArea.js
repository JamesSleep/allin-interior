import React, { useState } from "react";
import { View, StyleSheet, TextInput, Image, Text } from "react-native";

export default ({ state, setState }) => {
  const [pyeong, setPyeong] = useState("");
  const calculate = (text) => {
    const area = Number(text);
    return (area * 3.31).toFixed(2).toString();
  }
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <TextInput 
          style={styles.input}
          onChangeText={text=>setPyeong(text)}
        />
        <Text style={styles.text}>평</Text>
      </View>
      <Image 
        source={require("../../../../Image/same.png")} 
        style={styles.image}
      />
      <View style={styles.textBox}>
        <TextInput 
          editable={false}
          style={styles.input}
          value={calculate(pyeong)}
          onChangeText={value=>setState("area", value)}
        />
        <Text style={styles.text}>㎡</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    width: "40%",
    height: 45,
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: 5,
  },
  image: {
    width: "20%",
    height: "100%",
  },
  text: {
    fontSize: 17,
  },
  input: {
    width: "70%",
    fontSize: 14,
  }
})