import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard } from "react-native";
import { backgroundColor, nonActive, buttonColor } from "../../common/theme";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native-gesture-handler";
import BasicUploadImage from "../../Components/Main/BasicUploadImage";


export default function WriteStory({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.header}>
          <AntDesign 
            name="left" 
            size={20} 
            style={{ position: "absolute", left: 15 }} 
            onPress={()=>navigation.goBack()} 
          />
          <Text style={styles.title}>스토리 작성</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.imageUploadView}>
            <Text style={{ fontSize: 16, marginBottom: 15, }}>이미지 업로드</Text>
            <View style={{ width: "100%", height: "70%" }}>
              <BasicUploadImage />
            </View>
            <View />
          </View>
          <View style={styles.textAreaView}>
            <Text style={{ fontSize: 16, marginBottom: 15, }}>내용 입력</Text>
            <TextInput 
              style={{ 
                width: "100%",
                height: "80%",
                borderWidth: 1,
                borderColor: nonActive,
                borderRadius: 5,
                padding: 10,
                paddingTop: 10,
                fontSize: 14,
              }}
              multiline
              textAlignVertical="top"
            />
          </View>
          <View style={styles.buttonLayout}>
            <TouchableOpacity
              style={{ 
                width: "100%",
                height: "85%",
                backgroundColor: buttonColor,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 16, color: "white", fontWeight: "500" }} >작성완료</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
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
  content: {
    flex: 1,
    paddingHorizontal: 25,
  },
  imageUploadView: {
    flex: 3,
  },
  textAreaView: {
    flex: 6,
  },
  buttonLayout: {
    flex: 1,
  }
})