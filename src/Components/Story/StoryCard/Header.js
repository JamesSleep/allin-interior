import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { imagePathFormat } from "../../../utils/imagePathFormat";
import { _WIDTH } from "../../../common/theme";

export default ({ profile, nickname }) => (
  <View style={styles.container}>
    <Image 
      source={{ uri: imagePathFormat(profile) }}
      style={styles.image}
    />
    <View style={styles.textContainer}>
      <Text style={styles.username}>{nickname}</Text>
      <Text style={styles.time}>6분전</Text>
    </View>
    <Feather 
      name="more-horizontal"
      style={styles.more}
      size={_WIDTH/20}
      color="gray"
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: _WIDTH/30,
    paddingVertical: _WIDTH/35,
  },
  image: {
    width: _WIDTH/10,
    height: _WIDTH/10,
    borderRadius: 50,
    marginRight: 15,
  },
  textContainer: {
    justifyContent: "space-between"
  },  
  username: {
    fontSize: _WIDTH/30,
    marginBottom: 5,
  },  
  time: {
    fontSize: _WIDTH/35,
    color: "gray"
  },  
  more: {
    position: "absolute",
    right: 20,
  }
});