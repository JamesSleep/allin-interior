import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { backgroundColor, buttonColor } from "../../common/theme";

export const Filter = ({ index, selected, setSelected, text }) => {
  return (
    <View 
      style={{ 
        flex: 1,
        marginHorizontal: 0.5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: index === selected ? buttonColor : "#EEEEEE"
      }}
    >
      <TouchableOpacity 
        onPress={()=>setSelected(index)}
      >
        <Text 
          style={{
            fontSize: 14,
            color: index === selected ? "white" : "black"
          }}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  )
}