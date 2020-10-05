import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { _WIDTH } from "../../common/theme";

export default ({ }) => (
  <View style={styles.container}>
    <View style={styles.countContainer}>
      <Text style={styles.headText}>0</Text>
      <Text style={styles.subText}>팔로잉</Text>
    </View>
    <View style={styles.line} />
    <View style={styles.countContainer}>
      <Text style={styles.headText}>0</Text>
      <Text style={styles.subText}>팔로워</Text>
    </View>
    <View style={styles.line} />
    <View style={styles.countContainer}>
    <Text style={styles.headText}>0</Text>
      <Text style={styles.subText}>좋아요</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: "row",
    paddingBottom: _WIDTH/10,
  },
  countContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center"
  },
  line: {
    width: 1,
    height: "100%",
    borderWidth: 0.5,
    borderColor: "#c8d6e5"
  },
  headText: {
    fontSize: _WIDTH/22,
    fontWeight: "600",
    color: "#576574"
  },
  subText: {
    fontSize: _WIDTH/30,
    fontWeight: "400",
    color: "#8395a7"
  }
});