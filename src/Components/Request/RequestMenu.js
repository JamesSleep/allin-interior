import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { _WIDTH, buttonColor } from "../../common/theme";

export default ({ options, setOption, selected }) => {
  return (
    <View style={styles.container}>
      { options.map((option, index)=>(
        <TouchableOpacity
          key={index}
          style={
            index === selected ?
            styles.button :
            styles.nonButton
          }
          onPress={()=>setOption(index)}
        >
          <Text>{option.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  button: {
    width: _WIDTH*0.8,
    height: _WIDTH*0.12,
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    borderColor: buttonColor,
    borderWidth: 1,
    borderRadius: 5
  },
  nonButton: {
    width: _WIDTH*0.8,
    height: _WIDTH*0.12,
    marginVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 5
  }
})