import React, { useState } from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import ImagePicker from "react-native-image-crop-picker";
import MaterialComIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native-gesture-handler";

class pickedImage {
  constructor(
    image_path,
    data,
    image_tag
  ) {
    this.image_path = image_path;
    this.data = data;
    this.image_tag = image_tag;
  }
}

export default ({ imageList=[], setState }) => {
  const imagePick = () => {
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      mediaType: "photo",
      multiple: true,
      maxFiles: 10,
      includeBase64: true
    }).then(images => {
      const imgArray = images.map((image, index)=>{
        const img = new pickedImage(
          image.path,
          image.data,
          "request"
        );
        return img;
      });
      setState(request=>({
        ...request,
        imageList: imgArray
      }));
    }).catch(e => {
      console.log(e);
    })
  }
  const imageClean = (path) => {
    ImagePicker.cleanSingle(path).then(()=>{
      setState(request=>({
        ...request,
        imageList: imageList.filter(image => 
          image.image_path != path)
      }));
    }).catch(e => {
      console.log(e);
    });
  }
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        { imageList.length > 0 ?
          imageList.map((image, index) => (
            <View
              key={index}
              style={styles.imageView}
            >
              <Image       
                source={{ uri: image.image_path }}
                style={styles.image}
              />
              <MaterialComIcons 
                name="close"
                size={30}
                color={"rgba(0,0,0,0.8)"}
                style={styles.icon}
                onPress={()=>imageClean(image.image_path)}
              />
            </View>
          )) : (
          <TouchableOpacity
            onPress={()=>imagePick()}
          >
            <MaterialComIcons name="image-multiple-outline" size={70} />
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageView: {
    width: 200,
    height: 200,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  icon: {
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 2,
    shadowColor: "white",
    shadowOpacity: 2,
    shadowOffset: { width: 1, height: 1 },
    elevation: 5,
  }
})