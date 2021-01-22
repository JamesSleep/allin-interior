import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign"; // heart heart-o
import FontAwesome from "react-native-vector-icons/FontAwesome"; //comment
import { _WIDTH } from "../../../common/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GetHeartAPI, GetCommentAPI, UserInfoAPI } from "../../../common/api";
import AsyncStorage from "@react-native-community/async-storage";

export default ({ st_index }) => {
  const [heart, setHeart] = useState([]);
  const [comment, setComment] = useState([]);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { email } = JSON.parse(await AsyncStorage.getItem("loginData"));
    const heartAPI = await GetHeartAPI(JSON.stringify({ "st_index": st_index }));
    const commAPI = await GetCommentAPI(JSON.stringify({ "st_index": st_index }));
    const userAPI = await UserInfoAPI(JSON.stringify({ "email": email }));
    if (heartAPI[0]) setHeart(heartAPI[1]);
    else setHeart([]);
    if (commAPI[0]) setComment(commAPI[1]);
    else setComment([]);
    setUserInfo(userAPI[1]);
  }

  const checkHeart = () => {
    if (heart.length < 1) return false;
    let array = heart.filter(item => item.mb_index === userInfo.mb_index);
    if (array.length > 0) {
      return true;
    } else return false;
  }

  return (
    <View style={styles.container}>
      <View style={styles.object}>
        <FontAwesome 
          name={ checkHeart() ? "heart" : "heart-o" }
          size={_WIDTH/25}
          color={ heart ? "#e74c3c" : "rgba(0, 0, 0, 0.5)" }
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
  )
};

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
