import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { backgroundColor, buttonColor, _WIDTH } from "../../common/theme";
import Swiper from "react-native-swiper";
import { renderPagination } from "../../Components/Main/RederPagination";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Commercial({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Swiper height={160} autoplay renderPagination={renderPagination}>
        <View style={styles.slide}>
          <Image source={require("../../Image/example1.jpg")} style={styles.image}/>
        </View>
        <View style={styles.slide}>
          <Image source={require("../../Image/example2.jpg")} style={styles.image}/>
        </View>
        <View style={styles.slide}>
          <Image source={require("../../Image/example3.jpg")} style={styles.image}/>
        </View>
        <View style={styles.slide}>
          <Image source={require("../../Image/example4.jpeg")} style={styles.image}/>
        </View>
      </Swiper>
      <View style={styles.previewContainer}>
        <Text style={{ fontSize: 16, fontWeight: "500", marginBottom: 20, }}>심플한 사무실 인테리어</Text>
        <View style={{ width: "100%", height: 180, flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ width: "47%", height: "100%" }}>
            <Image source={require("../../Image/example1.jpg")} style={styles.previewImage}/>
            <Text style={{ fontSize: 14, fontWeight: "400", marginTop: 10, paddingHorizontal: 5 }}>
              반려묘와 함께하는 디자이너 부부의 레트로풍...
            </Text>
          </View>
          <View style={{ width: "47%", height: "100%" }}>
            <Image source={require("../../Image/example2.jpg")} style={styles.previewImage}/>
            <Text style={{ fontSize: 14, fontWeight: "400", marginTop: 10, paddingHorizontal: 5 }}>
              반려묘와 함께하는 디자이너 부부의 레트로풍...
            </Text>
          </View>
        </View>
        <View style={{ width: "100%", height: 180, flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ width: "47%", height: "100%" }}>
            <Image source={require("../../Image/example1.jpg")} style={styles.previewImage}/>
            <Text style={{ fontSize: 14, fontWeight: "400", marginTop: 10, paddingHorizontal: 5 }}>
              반려묘와 함께하는 디자이너 부부의 레트로풍...
            </Text>
          </View>
          <View style={{ width: "47%", height: "100%" }}>
            <Image source={require("../../Image/example2.jpg")} style={styles.previewImage}/>
            <Text style={{ fontSize: 14, fontWeight: "400", marginTop: 10, paddingHorizontal: 5 }}>
              반려묘와 함께하는 디자이너 부부의 레트로풍...
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{ 
            width: "100%", 
            height: _WIDTH/9, 
            marginTop: 10,
            borderColor: buttonColor,
            borderWidth: 1,
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 14, color: buttonColor, fontWeight: "500" }}>Before & After 모두보기</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  slide: {
    flex: 1,
    justifyContent: "center"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  previewContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 15,
  },
  previewImage: {
    width: "100%",
    height: 120,
    borderRadius: 10,
  }
});