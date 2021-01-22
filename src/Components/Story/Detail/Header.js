import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";
import { backgroundColor, _WIDTH } from "../../../common/theme";

export default ({ navigation, nickname }) => (
  <View style={styles.header}>
    <Text style={styles.title}>{nickname}</Text>
    <View style={styles.leftArrow}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <AntDesign 
          name="arrowleft"
          size={_WIDTH/20}
        />
      </TouchableOpacity>
    </View>
    <View style={styles.home}>
      <TouchableOpacity onPress={() => navigation.replace("Story")}>
        <AntDesign
          name="home"
          size={_WIDTH / 19}
        />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: backgroundColor,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },
  title: {
    fontSize: _WIDTH/24
  },
  leftArrow: {
    position: "absolute",
    left: _WIDTH/20,
  },
  home: {
    position: "absolute",
    right: _WIDTH/20,
  }
});