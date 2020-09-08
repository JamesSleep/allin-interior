import React from "react";
import { View, StyleSheet } from "react-native"
import { _WIDTH, nonActive } from "../../common/theme";

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.dotContainer}>
        <View style={styles.crossWidthLine}/>
        <View style={styles.crossHeightLine}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: nonActive,
  },
  dotContainer: {
    width: _WIDTH/3,
    height: _WIDTH/5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 0.5,
    borderStyle: "dashed",
  },
  crossWidthLine: {
    position: "absolute",
    width: _WIDTH/10,
    height: 0.5,
    borderWidth: 0.5,
    borderColor: nonActive,
  },
  crossHeightLine: {
    width: 0.5,
    height: _WIDTH/10,
    borderWidth: 0.5,
    borderColor: nonActive,
  },
});