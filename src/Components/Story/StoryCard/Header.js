import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { imagePathFormat } from "../../../utils/imagePathFormat";
import { _WIDTH } from "../../../common/theme";

export default ({ profile, nickname, timestamp }) => (
  <View style={styles.container}>
    <Image 
      source={{ uri: imagePathFormat(profile) }}
      style={styles.image}
    />
    <View style={styles.textContainer}>
      <Text style={styles.username}>{nickname}</Text>
      <Text style={styles.time}>{timeChange(timestamp)}</Text>
    </View>
  </View>
);

const timeChange = (time) => {
  const times = Number(time);
  const write = new Date(times);
  const now = new Date().getTime();
  const gap = (now - times) / 1000;
  if (gap < 60) return "방금전";
  else if (gap < 3600) return `${(gap/60).toFixed(0)}분 전`;
  else if (gap < 86400) return `${(gap/3600).toFixed(0)}시간 전`;
  else if (gap < 2592000) return `${(gap/86400).toFixed(0)}일 전`;
  else return `${write.getFullYear()}년 ${write.getMonth() + 1}월 ${write.getDate()}일`;
}

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