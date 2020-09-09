import React, { useState } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  Alert } from "react-native";
import MaterialComIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { _WIDTH, _HEIGHT, backgroundColor, nonActive, buttonColor } from "../../common/theme";
import ImagePicker from "react-native-image-crop-picker";

export default ({ 
  portpolio,
  setPortpolio,
  portpolioInfo,
  index,
  setVisible
}) => {
  const [imageUri, setImageUri] = useState({
    image_path: portpolioInfo.image_path,
    data: portpolioInfo.data,
    image_tag: "portpolio"
  });
  const [title, setTitle] = useState(portpolioInfo.title);
  const [content, setContent] = useState(portpolioInfo.content);
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
  const deleteData = () => {
    if(portpolio.length < 2) {
      setPortpolio([{
        image_path: null,
        data: null,
        image_tag: "portpolio",
        title: "",
        content: ""
      }]);
    } else {
      setPortpolio(portpolio.filter(
        (port, idx) => idx !== index 
      ));
    }
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
    setPortpolio(portpolio.map((port, idx) => {
      if(idx === index) 
        return data;
      else return port;
    }));
  }
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.text}>사진 편집</Text>
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
          value={title}
          style={styles.titleInput}
          onChangeText={txt=>setTitle(txt)}
        />
        <Text style={styles.text}>설명</Text>
        <TextInput 
          value={content}
          style={styles.contentInput}
          multiline
          textAlignVertical="top"
          onChangeText={txt=>setContent(txt)}
        />
        <TouchableOpacity
          style={styles.save}
          onPress={()=>{deleteData(); setVisible(null);}}
        >
          <Text style={{ fontSize: 14, color: "white" }}>삭제</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.close}
          onPress={()=>{saveData(); setVisible(null);}}
        >
          <Text style={{ fontSize: 14, color: "white" }}>저장 & 닫기</Text>
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