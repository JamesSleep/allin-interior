import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default ({ navigation, name, uri, value }) => (
  <View style={styles.container}>
    <TouchableOpacity
      onPress={()=>navigation.navigate("Agreement", 
        {option: value} 
      )}
    >
      <Image 
        source={uri}
        style={styles.image}
      />
      <Text style={styles.text}>{name}</Text>
      <View style={styles.opacityView} />
    </TouchableOpacity>
  </View>
) 

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    borderRadius: 20,
    overflow: "hidden",
    marginVertical: 15,
  },
  image: {
    width: "100%",
    height: "100%"
  },
  opacityView: {
    width: "100%",
    height: "100%",
    zIndex: 1,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "#535c68",
    opacity: 0.4,
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 1,
    zIndex: 2,
    position: "absolute",
    left: 20,
    bottom: 25,
    color: "#dff9fb"
  }
});