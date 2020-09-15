import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { nonActive, _WIDTH } from "../../../common/theme";

export default ({ categories }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>전문분야</Text>
      <View style={styles.content}>
        <View style={styles.category}>
          <Image 
            source={require("../../../Image/comprehensive.png")}
            style={styles.icon}
          />
          <Text style={styles.text}>종합시공</Text>
        </View>
        
        <View style={styles.category}>
          <Image 
            source={require("../../../Image/partial_construction.png")}
            style={styles.icon}
          />
          <Text style={styles.text}>부분시공</Text>
        </View>
        <View style={styles.category}>
          <Image 
            source={require("../../../Image/residential.png")}
            style={styles.icon}
          />
          <Text style={styles.text}>주거공간</Text>
        </View>
        <View style={styles.category}>
          <Image 
            source={require("../../../Image/commercial_space.png")}
            style={styles.icon}
          />
          <Text style={styles.text}>상업공간</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 150,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 15,
    fontWeight: "500",
  },
  content: {
    width: "100%",
    height: 100,
    marginTop: 10,
    backgroundColor: "#F9F9F9",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  icon: {
    width: _WIDTH*0.12,
    height: _WIDTH*0.12,
  },
  category: {
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 12,
    fontWeight: "300"
  }
});