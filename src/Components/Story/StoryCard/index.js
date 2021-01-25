import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "./Header";
import { backgroundColor, _WIDTH } from "../../../common/theme";
import ImageViewer from "./ImageViewer";
import Content from "./Content";
import { TouchableOpacity } from "react-native-gesture-handler";

export default ({ navigation, data, userInfo }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={()=>navigation.navigate("Detail", { data: data, userInfo, screen: "StoryHome" })}>
      <View style={{ width: "100%", height: 350 }}>
        <Header 
          profile={data.user_info.profile}
          nickname={data.user_info.nick_name}
          timestamp={data.timestamp}
        />
        <ImageViewer 
          image={data.images[0].image_path}
        />
        <Content 
          heart={data.heart}
          comment={data.comment}
          mb_index={userInfo.mb_index}
        />
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 350,
    marginBottom: _WIDTH/15,
    borderRadius: 10,
    backgroundColor: backgroundColor,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  }
})