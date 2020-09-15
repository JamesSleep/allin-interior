import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Swiper from "react-native-swiper";
import { renderPagination } from "../../../Components/Main/RederPagination";
import { imageLoad } from "../../../common/imageLoad";

export default ({ images }) => {
  return (
    <View style={styles.container}>
      <Swiper height="100%" renderPagination={renderPagination} >
        { images?.company?.map((image,index) => (
          <View key={index} style={{ flex: 1, }}>
            <Image 
              source={{ uri: imageLoad(image) }} 
              style={{ width: "100%", height: "100%", }}
              resizeMode="cover"
            />
          </View>
        ))}
      </Swiper>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
  }
});