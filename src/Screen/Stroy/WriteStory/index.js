import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "./Header";
import ImageUpload from "./ImageUpload";
import { backgroundColor, buttonColor } from "../../../common/theme";
import Content from "./Content";
import { StoryWritePostAPI, StoryImageAPI } from "../../../common/api";
import { TouchableOpacity } from "react-native-gesture-handler";

export default ({ navigation, route }) => {
  const { userId } = route.params.userInfo;
  const [story, setStroy] = useState({
    content: "",
    timestamp: 0,
    images: []
  });
  const setStateValue = (property, value) => {
    setStroy({
      ...story,
      [property]: value
    });
  }
  const postData = async () => {
    const data = JSON.stringify({
      "userId": userId,
      "content": story.content,
      "timestamp": story.timestamp
    });
    const result = await StoryWritePostAPI(data);
    if(!result[0]) {
      console.log(result[1]);
      return;
    }
    const imageData = story.images.map((value, index) => ([
      { name: "image", filename: "image.png", type: "image/jpeg", data: String(value.data) },
      { name: "image_tag", data: String(value.image_tag) },
      { name: "index", data: String(result[1].index) }
    ]));
    if(story.images.length > 0) {
      for(let i=0; i<imageData.length; i++) {
        const result = await StoryImageAPI(imageData[i]);
        if(result[0]) {
          continue;
        } else {
          console.log(result);
          return;
        }
      }
    }
    navigation.reset({
      index: 0,
      routes: [{ name: "StoryMain" }]
    });
  }
  return (
    <View style={styles.container}>
      <Header 
        navigation={navigation} 
        postData={postData}
      />
      <View style={styles.content}>
        <ImageUpload 
          images={story.images}
          setImages={value=>setStateValue(
            "images", value
          )}
        />
        <Content 
          content={story.content}
          setContent={value=>setStateValue(
            "content", value
          )}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={()=>postData()}
          >
            <Text style={{ fontSize: 15, color: "white" }}>작성 완료</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor
  },
  content: {
    flex: 1,
    paddingHorizontal: 25,
  },
  buttonContainer: {
    flex: 1,
    paddingBottom: 10,
    justifyContent: "flex-end"
  },
  button: {
    width: "100%",
    height: "70%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: buttonColor,
    borderRadius: 5,
  }
})