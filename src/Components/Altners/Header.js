import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { backgroundColor, _WIDTH } from "../../common/theme";
import MaterialCI from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default ({ navigation, screen }) => (
  <View style={styles.container}>
    <Text style={styles.title}>
      {screen}
    </Text>
    <View style={styles.icon}>
      <TouchableOpacity 
        onPress={() => navigation.openDrawer()}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <MaterialCI name="menu" size={30} />
        <Text style={{ fontSize: 8 }}>MENU</Text>
      </TouchableOpacity>
    </View>
    { screen === "상세정보" && (
      <View style={styles.backButton}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCI name="arrow-left" size={25} />
        </TouchableOpacity>
      </View>
    )}
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
  backButton: {
    position: "absolute",
    left: _WIDTH / 20,
  }
});