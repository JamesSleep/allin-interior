import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { buttonColor, _WIDTH } from "../../../common/theme";
import { TouchableOpacity } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 2.5, 
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
    width: _WIDTH/10, 
    height: _WIDTH/10
  },
  alarmText: {
    fontSize: 13, 
    marginTop: 4
  }
})

export default ({ joinInfo, companyPrivate }) => {
  return (
    <View style={styles.container}>
      <Text>전문분야</Text>
      <View style={{
        width: "100%",
        flexDirection: "row", 
        justifyContent: "space-around", 
        alignItems: "center" 
      }}>
        <View style={styles.iconContainer}>
          <Image source={require("../../../Image/residential.png")} style={styles.iconStyle} />
          <Text style={styles.alarmText}>{"주거공간"}</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image source={require("../../../Image/space.png")} style={styles.iconStyle} />
          <Text style={styles.alarmText}>{"상업공간"}</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image source={require("../../../Image/partial_construction.png")} style={styles.iconStyle} />
          <Text style={styles.alarmText}>{"부분시공"}</Text>
        </View>
      </View>
      <Text>
        시공횟수<Text style={{ color: buttonColor }}> {companyPrivate.complete} </Text>회  
      </Text>
    </View>
  )
}