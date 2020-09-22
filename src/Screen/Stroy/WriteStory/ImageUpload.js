import React from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import MaterialComIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import ImagePicker from "react-native-image-crop-picker";
import { _WIDTH } from "../../../common/theme";

export default ({ images=[], setImages }) => {
  const imagePick = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 300,
      mediaType: "photo",
      multiple: true,
      includeBase64: true
    }).then(pickedImages => {
      setImages(pickedImages.map(image => ({
        image_path: image.path,
        data: image.data,
        image_tag: "story"
      })));
    }).catch(e => {
      console.log("story image error :", e);
    });
  }
  const cleanImage = (path) => {
    ImagePicker.cleanSingle(path).then(() => {
      setImages(images.filter(image => image.image_path != path));
    }).catch(e => {
      console.log("story clean error", e);
    })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>이미지 업로드</Text>
      <View style={styles.imageContainer}>
        { images.length < 1 ? (
          <TouchableOpacity
            onPress={()=>imagePick()}
          >
            <MaterialComIcons 
              name="image-multiple-outline" 
              size={70} 
            />
          </TouchableOpacity>) : (
          <ScrollView horizontal>
            { images.map((image, index) => (
              <View 
                key={index}
                style={{ width: 300, height: "100%" }}
              >
                <Image 
                  source={{ uri: image.image_path }}
                  style={{ width: "100%", height: "100%" }}
                  resizeMode="cover"
                />
                <MaterialComIcons 
                  name="close"
                  size={_WIDTH/30}
                  style={styles.clean}
                  onPress={()=>cleanImage(image.image_path)}
                />
              </View>
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 3
  },
  title: {
    fontSize: 16,
    marginBottom: 15,
  },
  imageContainer: {
    flex: 1,
  },
  clean: {
    position: "absolute",
    right: 0,
    top: 0
  }
});
