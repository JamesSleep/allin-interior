import React from "react";
import { View, Text } from "react-native";

export const renderPagination = (index, total, context) => {
  return (
    <View 
      style={{ 
        position: "absolute", 
        bottom: 10, 
        right: 10, 
        width: 45,
        height: 16,
        backgroundColor: "rgba(0,0,0,0.5)",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text style={{ color: "white", fontSize: 11, letterSpacing: 2 }}>
        {index + 1}/{total}
      </Text>
    </View>
  )
}