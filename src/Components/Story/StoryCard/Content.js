import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome"; 
import { _WIDTH } from "../../../common/theme";
import AsyncStorage from "@react-native-community/async-storage";

export default ({ heart, comment, mb_index }) => (
  <View style={styles.container}>
    <View style={styles.object}>
      <FontAwesome 
        name={
          heart.filter(item => item.mb_index === mb_index).length > 0 ?
          "heart" : "heart-o" 
        }
        size={_WIDTH/25}
        color={
          heart.filter(item => item.mb_index === mb_index).length > 0 ?
          "#e74c3c" : "rgba(0, 0, 0, 0.5)" 
        }
      />
      <Text style={styles.count}>{heart.length}</Text>
    </View>
    <View style={styles.object}>
      <FontAwesome
        name="comment"
        size={_WIDTH/23}
        color="#95a5a6"
      />
      <Text style={styles.count}>{comment.length}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  object: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: _WIDTH/13,
  },
  count: {
    marginLeft: _WIDTH/45,
    fontSize: _WIDTH/38,
    fontWeight: "300"
  }
});
