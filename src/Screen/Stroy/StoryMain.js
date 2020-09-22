import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, ScrollView, RefreshControl } from "react-native";
import { backgroundColor, buttonColor, _WIDTH } from "../../common/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import StoryCard from "./StoryCard";
import AsyncStorage from "@react-native-community/async-storage";
import { UserInfoAPI, StoryListAPI } from "../../common/api";
import { withSafeAreaInsets } from "react-native-safe-area-context";

export default function StoryMain({ navigation }) {
  const [userInfo, setUserInfo] = useState({
    userId: "",
    nickName: "",
    image_path: "",
  });
  const [storyList, setStoryList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(()=>{
    getData();
    getList();
  },[]);
  const getData = async () => {
    const loginData = JSON.parse(await AsyncStorage.getItem("loginData"));
    const postData = JSON.stringify({
      "userId": loginData.userId
    });
    const result = await UserInfoAPI(postData);
    if(!result[0]) {
      console.log("Failed");
      return;
    }
    const {
      joinInfo: {
        mb_id: userId,
        mb_nickname: nickName,
        mb_image_path: image_path
      }
    } = result[1];
    setUserInfo({ userId, nickName, image_path });
  }
  const getList = async () => {
    const result = await StoryListAPI();
    setStoryList(result[1].storyList);
  }
  const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(300).then(() => {
      getList();
      setRefreshing(false);
    });
  },[]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>스토리</Text>
        <View style={{ position: "absolute", right: _WIDTH/18 }}>
          <TouchableOpacity 
            style={styles.writeButton}
            onPress={()=>navigation.navigate("WriteStory", {
              userInfo: userInfo
            })}
          >
            <Text style={styles.buttonText}>작성</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView 
        refreshControl={
          <RefreshControl 
            tintColor={"black"}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        style={{ flex: 1 }}
      >
        { storyList.map((story, index)=>(
          <StoryCard 
            key={index}
            storyInfo={story}
            userInfo={userInfo}
          />
        )) }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor
  },
  header: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  }, 
  writeButton: {
    justifyContent: "center",
    alignItems: "center"
  },  
  buttonText: {
    fontSize: 15,
    fontWeight: "400",
    color: buttonColor
  },
});