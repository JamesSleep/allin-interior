import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { buttonColor, _WIDTH } from "../../../common/theme";
import { TouchableOpacity } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1.4, 
    flexDirection: "row", 
    justifyContent: "space-around", 
    alignItems: "center", 
    borderTopWidth: 7,
    borderBottomWidth: 7,
    borderColor: "#F1F1F1"
  },
  iconContainer: {
    alignItems: "center"
  },
  iconStyle: {
    width: _WIDTH/15, 
    height: _WIDTH/17
  },
  alarmText: {
    fontSize: 13, 
    marginTop: 4
  }
})

export default ({ memberPrivate }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer}>
        <Image source={require("../../../Image/notification.png")} style={styles.iconStyle} />
        <Text style={styles.alarmText}>{memberPrivate.notification}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Image source={require("../../../Image/scrap.png")} style={styles.iconStyle} />
        <Text style={styles.alarmText}>{memberPrivate.bookmark}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Image source={require("../../../Image/like.png")} style={styles.iconStyle} />
        <Text style={styles.alarmText}>{memberPrivate.like}</Text>
      </TouchableOpacity>
    </View>
  )
}