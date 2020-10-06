import React from "react";
import { View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ImagePicker from "react-native-image-crop-picker";
import AntDesign from "react-native-vector-icons/AntDesign";
import { _WIDTH } from "../../../common/theme";

export default ({ state, setState }) => {
  const imagePicker = () => {
    ImagePicker.openPicker({
      mediaType: "photo",
      includeBase64: true,
      multiple: true
    }).then(image => {
      ImagePicker.openCropper({
        path: image.path,
        width: 1000,
        height: 600,
        includeBase64: true
      }).then(cropped => {
        console.log(cropped);
      }).catch(e => {
        console.log(e);
      })
    }).catch(e=>{
      console.log(e);
    })
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageList}>
        <TouchableOpacity>
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
  }
});