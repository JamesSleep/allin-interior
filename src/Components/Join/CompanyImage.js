import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import ImagePicker from "react-native-image-crop-picker";
import { _WIDTH } from "../../common/theme";
import { TouchableOpacity } from "react-native-gesture-handler";

export default ({ title, multiple=false, value, setValue }) => {
  const imagePicker = () => {
    ImagePicker.openPicker({
      mediaType: "photo",
      includeBase64: true,
      multiple: multiple
    }).then(image => {
      ImagePicker.openCropper({
        path: image.path,
        width: 1000,
        height: 500,
        includeBase64: true
      }).then(cropped => {
        setValue({
          ...value,
          image_path: cropped.path,
          image_data: cropped.data
        });
      }).catch(e => {
        console.log(e);
      })
    }).catch(e=>{
      console.log(e);
    })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.columnTitle}>{title}</Text>
      <TouchableOpacity 
        style={styles.imageContainer}
        onPress={()=>imagePicker()}
      >
        { value?.image_path ? (
          <Image 
            source={{ uri: value.image_path }}
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <Feather 
            name="camera"
            size={_WIDTH*0.2}
            color="#bdc3c7"
          />
        )}
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: _WIDTH/15,
  },
  columnTitle: {
    fontSize: _WIDTH/32,
    fontWeight: "400",
    marginBottom: _WIDTH/35
  },
  imageContainer: {
    width: _WIDTH*0.6,
    height: _WIDTH*0.3,
    marginLeft: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "gray",
    overflow: "hidden",
  },
});