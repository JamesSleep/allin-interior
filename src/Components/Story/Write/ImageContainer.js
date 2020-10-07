import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ImagePicker from "react-native-image-crop-picker";
import AntDesign from "react-native-vector-icons/AntDesign";
import { _WIDTH } from "../../../common/theme";

export default ({ state=[], setState }) => {
  const imagePicker = () => {
    ImagePicker.openPicker({
      mediaType: "photo",
      includeBase64: true,
    }).then(image => {
      ImagePicker.openCropper({
        path: image.path,
        width: 1000,
        height: 800,
        includeBase64: true
      }).then(cropped => {
        setState([
          ...state,
          {
            image_path: cropped.path,
            image_data: cropped.data,
            image_tag: "MemberStory"
          }
        ]);
      }).catch(e => {
        console.log(e);
      })
    }).catch(e=>{
      console.log(e);
    })
  }
  const imageRemove = path => {
    setState(state.filter(
      image => image.image_path !== path
    ));
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageList}>
        { state.length > 0 && (
          state.map((image, index) => (
            <TouchableOpacity
              key={index}
              onPress={()=>imageRemove(image.image_path)}
            >
              <Image 
                source={{ uri: image.image_path }}
                style={styles.addButton}
              />
            </TouchableOpacity>
          ))
        )}
        <TouchableOpacity onPress={imagePicker}>
          <View style={styles.addButton}>
            <AntDesign 
              name="plus"
              size={_WIDTH/20}
              color="#7f8c8d"
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: _WIDTH/15,
  },
  imageList: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  addButton: {
    width: _WIDTH*0.23,
    height: _WIDTH*0.23,
    backgroundColor: "#ecf0f1",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    marginBottom: 15,
    borderRadius: 15,
  },
});