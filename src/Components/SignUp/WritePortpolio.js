import React, { useState } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  Alert, 
  Platform, 
  ToastAndroid } from "react-native";
import MaterialComIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { _WIDTH, _HEIGHT, backgroundColor, nonActive, buttonColor } from "../../common/theme";
import ImagePicker from "react-native-image-crop-picker";

export default ({ 
  setVisible,
  portpolio,
  setPortpolio
}) => {
  const [imageUri, setImageUri] = useState({
    image_path: null,
    data: null,
    image_tag: "portpolio"
  });
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const imagePick = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      mediaType: "photo",
      includeBase64: true
    }).then(image => {
      //console.log(image);
      setImageUri({
        image_path: image.path,
        data: image.data,
        image_tag: "portpolio"
      });
    }).catch(e => {
      console.log(e);
    })
  }
  const imageClean = (path) => {
    ImagePicker.cleanSingle(path).then(() => {
      Platform.OS === "android" ?
      ToastAndroid.show("사진이 제거되었습니다", ToastAndroid.SHORT) :
      Alert.alert("사진이 제거되었습니다");
    }).catch(e => {
      console.log("imageCleanError :",e);
    });
  }
  const saveData = () => {
    if(title === "" || content === "" || imageUri.image_path === null) {
      Alert.alert("모든 정보를 입력해주세요!");
      return;
    }
    const data = {
      image_path: imageUri.image_path,
      data: imageUri.data,
      image_tag: "portpolio",
      title: title,
      content: content
    };
    if(portpolio[0].data === null) {
      setPortpolio([data]);
    } else {
      setPortpolio([
        ...portpolio,
        data
      ]);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.text}>사진 업로드</Text>
        <View 
          style={{ 
            width: "100%", 
            height: 120, 
            marginVertical: 15,
            alignItems: "center"
          }}
          onTouchEnd={()=>imagePick()}
        >
          { imageUri.image_path !== null ?
            <Image 
              source={{ uri: imageUri.image_path }} 
              style={{ width: "100%", height: "100%" }} 
              resizeMode="contain"
            /> : (
            <MaterialComIcons name="image-multiple-outline" size={70} />
          )}
        </View>
        <Text style={styles.text}>제목</Text>
        <TextInput 
          style={styles.titleInput}
          onChangeText={txt=>setTitle(txt)}
        />
        <Text style={styles.text}>설명</Text>
        <TextInput 
          style={styles.contentInput}
          multiline
          textAlignVertical="top"
          onChangeText={txt=>setContent(txt)}
        />
        <TouchableOpacity
          style={styles.save}
          onPress={()=>{saveData(); setVisible(false);}}
        >
          <Text style={{ fontSize: 14, color: "white" }}>저장</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.close}
          onPress={()=>setVisible(props=>!props)}
        >
          <Text style={{ fontSize: 14, color: "white" }}>닫기</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  subContainer: {
    width: "95%",
    height: 550,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: backgroundColor,
    borderRadius: 10,
  },
  text: {
    fontSize: 15,
  },
  titleInput: {
    width: "100%",
    height: 45,
    borderWidth: 0.5,
    borderColor: nonActive,
    borderRadius: 10,
    marginVertical: 15,
    paddingHorizontal: 10,
    paddingVertical: 15,
    fontSize: 12,
  },
  contentInput: {
    width: "100%",
    height: 100,
    borderWidth: 0.5,
    borderColor: nonActive,
    borderRadius: 10,
    marginVertical: 15,
    paddingHorizontal: 10,
    paddingVertical: 15,
    fontSize: 12,
    lineHeight: 15,
  },
  save: {
    width: "100%",
    height: 40,
    marginVertical: 5,
    backgroundColor: buttonColor,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  close: {
    width: "100%",
    height: 40,
    marginVertical: 5,
    backgroundColor: nonActive,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  }
});