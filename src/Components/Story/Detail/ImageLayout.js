import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Swiper from "react-native-swiper";
import { imagePathFormat } from "../../../utils/imagePathFormat";
import { _WIDTH } from "../../../common/theme";

const renderPagination = (index, total, context) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={{ color: 'grey' }}>
        <Text style={styles.paginationText}>{index + 1}/{total}</Text>
      </Text>
    </View>
  )
}

export default ({ imageList=[] }) => (
  <View style={styles.container}>
    <Swiper 
      renderPagination={imageList.length > 1 && renderPagination}
    >
      { imageList.length > 0 && imageList.map((image, index) => (
        <View 
          key={index}
          style={styles.imageView}
        >
          <Image 
            source={{ uri: imagePathFormat(image.image_path) }} 
            style={styles.image}
          />
        </View>
      ))}
    </Swiper>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: _WIDTH * 0.7
  },
  imageView: {
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  paginationStyle: {
    paddingHorizontal: _WIDTH/50,  
    paddingVertical: _WIDTH/80,
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: "black",
    borderRadius: 10,
  },
  paginationText: {
    color: 'white',
    fontSize: _WIDTH/30
  }
});