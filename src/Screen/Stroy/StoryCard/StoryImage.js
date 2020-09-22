import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Swiper from "react-native-swiper";
import { renderPagination } from "../../../Components/Main/RederPagination";
import { imageLoad } from "../../../common/imageLoad";

export default ({ images=[] }) => {
  return (
    <Swiper
      height={220}
      renderPagination={renderPagination}
    >
      { images.map((image, index)=>(
        <View
          key={index}
          style={{ flex: 1 }}
        >
          <Image 
            source={{ uri: imageLoad(image) }}
            style={styles.imageStyle}
          />
        </View>
      ))}
    </Swiper>
  )
}

const styles = StyleSheet.create({
  imageStyle: {
    width: "100%",
    height: "100%"
  }
});