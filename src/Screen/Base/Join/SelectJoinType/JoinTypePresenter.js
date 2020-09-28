import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { backgroundColor } from "../../../../common/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import Header from "../../../../Components/Join/Header";
import TypeCard from "../../../../Components/Join/SelectType/TypeCard";

export default ({ navigation, joinList=[] }) => (
  <View style={styles.container}>
    <Header navigation={navigation} />
    <View style={{ flex: 1, paddingHorizontal: 20, }}>
      { joinList.map((join, index) => (
        <TypeCard 
          key={index}
          navigation={navigation}
          name={join.name}
          uri={join.uri}
          value={join.value}
        />
      ))}
    </View>
  </View>
) 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor
  },
  header: {
    width: "100%",
    height: 70,
    alignItems: "center",
    justifyContent: "center"
  },
  joinContainer: {
    flex: 1,
  },
  button: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 1,
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    position: "absolute",
    zIndex: 2,
    bottom: 20,
    left: 20,
    fontSize: 30,
    color: "white",
  }
});