import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { backgroundColor, _WIDTH } from "../../common/theme";
import AntIcon from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native-gesture-handler";

export default ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>올트너스</Text>
    <View style={styles.icon}>
      <TouchableOpacity onPress={() => navigation.navigate("Request", { gate: "main" })}>
        <AntIcon name="form" size={_WIDTH / 20} />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
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
    fontSize: _WIDTH / 24,
  },
  icon: {
    position: "absolute",
    right: _WIDTH / 20,
  },
});